import {requestsAPI, profileAPI} from './../api/api' 

const ADD_POST = 'ADD-POST';
const NEW_POST_CHANGE = 'NEW-POST-CHANGE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {

    posts: [
        { id: 1, message: 'Defeated count Douku', likeCount: 1920 },
        { id: 2, message: 'Outer rim sigeses won', likeCount: 560 },
        { id: 3, message: 'Enemy starship destroyed', likeCount: 1560 },
        { id: 4, message: 'Relot was libirated', likeCount: 240 },
    ],
    newPost: 'some text here',
    userProfile: null,
    profileStatus:''

}


const profileReducer = (state = initialState, action) => {

    switch (action.type){

        case ADD_POST:

        let count = state.posts.length
        count++

            let newPost = {
                id: count,
                message: action.post,
                likeCount: 0
            };

            return (
                {
                    ...state,
                    posts: [...state.posts, newPost],
 
                }
            )

        case SET_USER_PROFILE:
            return (
                {
                    ...state,
                    userProfile: action.userProfile
                }
            )

        case SET_USER_STATUS:
            return (
                {
                    ...state,
                    profileStatus: action.profileStatus
                }
            )

        default:
            return state;

    }
}

export const setUserProfile = (userProfile) => ({type:SET_USER_PROFILE, userProfile})
export const setProfileStatus = (profileStatus) => ({type: SET_USER_STATUS, profileStatus})
export const addPostActionCreator = (post) => ({type: ADD_POST, post })


export const getUserProfile = (userProfile) => {

    return (dispatch) => {
        
        requestsAPI.getUserProfile(userProfile)
            .then(data => {
                dispatch(setUserProfile(data));
            })
    }
}

export const getProfileStatus = (userId) => {

    return(dispatch) => {

        profileAPI.getProfileStatus(userId)
        .then(data => {
            dispatch(setProfileStatus(data))
        })
    }
}

export const updateProfileStatus = (status) => {

    return(dispatch) => {
        profileAPI.setProfileStatus(status)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setProfileStatus(status))
            }
        })
    }
}


export default profileReducer;