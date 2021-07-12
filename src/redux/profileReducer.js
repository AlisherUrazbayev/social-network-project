import { requestsAPI, profileAPI } from './../api/api'

const ADD_POST = 'ADD-POST';
const NEW_POST_CHANGE = 'NEW-POST-CHANGE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const SET_PROFILE_PHOTO_SUCCESS = 'SET_PROFILE_PHOTO_SUCCESS';

let initialState = {

    posts: [
        { id: 1, message: 'My first post!!!', likeCount: 19 },
        { id: 2, message: 'Started learning React.js', likeCount: 22 },
        { id: 3, message: 'Created my first project', likeCount: 18 },
        { id: 4, message: 'Got a new car', likeCount: 17 },
    ],
    newPost: 'some text here',
    userProfile: null,
    profileStatus: ''

}


const profileReducer = (state = initialState, action) => {

    switch (action.type) {

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
        case SET_PROFILE_PHOTO_SUCCESS:
            return (
                {
                    ...state,
                    userProfile: { ...state.userProfile, photos: action.photos }
                }
            )

        default:
            return state;

    }
}

export const setUserProfile = (userProfile) => ({ type: SET_USER_PROFILE, userProfile })
export const setProfileStatus = (profileStatus) => ({ type: SET_USER_STATUS, profileStatus })
export const addPostActionCreator = (post) => ({ type: ADD_POST, post })
export const setProfilePhotoSuccess = (photos) => ({ type: SET_PROFILE_PHOTO_SUCCESS, photos })


export const getUserProfile = (userProfile) => async (dispatch) => {

    const data = await requestsAPI.getUserProfile(userProfile)
    dispatch(setUserProfile(data));

}

export const getProfileStatus = (userId) => async (dispatch) => {

    const data = await profileAPI.getProfileStatus(userId)
    dispatch(setProfileStatus(data))

}

export const updateProfileStatus = (status) => async (dispatch) => {

    const response = await profileAPI.setProfileStatus(status)

    if (response.data.resultCode === 0) {
        dispatch(setProfileStatus(status))
    }
}

export const savePhoto = (file) => async (dispatch) => {

    const response = await profileAPI.setProfilePhoto(file);

    if (response.data.resultCode === 0) {
        dispatch(setProfilePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile) => async (dispatch,getState) => {

    const userId = getState().auth.id
    const response = await profileAPI.saveProfile(profile);

    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    }
}

export default profileReducer;