import { act } from "react-dom/test-utils";
import {requestsAPI} from './../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';


let initialState = {

    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []


};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return (
                {
                    ...state,
                    users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return { ...u, followed: true }
                        }

                        return u;
                    })
                }
            )
        case UNFOLLOW:
            return (
                {
                    ...state,
                    users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return { ...u, followed: false }
                        }
                        return u;
                    })
                }
            )
        case SET_USERS:
            return (
                {
                    ...state,
                    users: action.users
                }
            )
        case CHANGE_CURRENT_PAGE:
            return (
                {
                    ...state,
                    currentPage: action.currentPage
                }
            )
        case SET_TOTAL_USERS_COUNT:
            return (
                {
                    ...state,
                    totalUsersCount: action.count
                }
            )

        case TOGGLE_IS_FETCHING:
            return (
                {
                    ...state,
                    isFetching: action.isFetching
                }
            )

        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return (
                {
                    ...state,
                    followingInProgress: action.isFetching
                        ? [...state.followingInProgress, action.userId]
                        : state.followingInProgress.filter(id => id != action.userId)
                }
            )

        default:
            return state;
    }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users })
export const changeCurrentPage = (currentPage) => ({ type: CHANGE_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });
export const toggleIsFetiching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching: isFetching });
export const toggleFollowingInProgress = (isFetching, userId) => ({ type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId });

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {

        dispatch(toggleIsFetiching(true));

        requestsAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
                dispatch(toggleIsFetiching(false));
            })
    }
}

export const changeCurrentPageThunk = (currentPage) => {

    return (dispatch) => {

        dispatch(changeCurrentPage(currentPage));

    }
}

export const unfollow = (userId) => {

    return (dispatch) => {

        dispatch(toggleFollowingInProgress(true, userId));
        requestsAPI.unfollowUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId));
                }
                dispatch(toggleFollowingInProgress(false, userId));
            })
    }
}

export const follow = (userId) => {

    return (dispatch) => {

        dispatch(toggleFollowingInProgress(true, userId));
        requestsAPI.followUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(userId));
                }
                dispatch(toggleFollowingInProgress(false, userId));
            })
    }
}

export default usersReducer;