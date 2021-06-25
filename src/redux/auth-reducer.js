import { requestsAPI, authAPI } from './../api/api';


const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';


let initialState = {

    id: null,
    email: null,
    login: null,
    isLoggedIn: false

}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_AUTH_USER_DATA:

            return (
                {
                    ...state,
                    ...action.data,
                    isLoggedIn: action.isLoggedIn
                }
            )

        default:

            return state;

    }
}

export const setAuthUserData = (id, email, login, isLoggedIn) => ({ type: SET_AUTH_USER_DATA, data: { id, email, login }, isLoggedIn })

export const setAuthUserDataThunk = () => async (dispatch) => {

    const response = await requestsAPI.getMineAuth()

    if (response.data.resultCode === 0) {

        let { id, email, login } = response.data;
        dispatch(setAuthUserData(id, email, login, true));

    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {

    const response = await authAPI.login(email, password, rememberMe)

    if (response.data.resultCode === 0) {
        const data = await requestsAPI.getMineAuth()

        if (data.resultCode === 0) {

            let { id, email, login } = data.data;
            dispatch(setAuthUserData(id, email, login, true));

        }
    }
}

export const logout = () => async (dispatch) => {

    const response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}


export default authReducer;