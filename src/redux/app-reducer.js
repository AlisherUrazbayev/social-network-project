import { act } from "react-dom/test-utils";
import { setAuthUserDataThunk } from "./auth-reducer";

const INITIALIZED = 'INITIALIZED';


let initialState = {

    initialized: false

}

const appReducer = (state = initialState, action) => {

    switch (action.type) {

        case INITIALIZED:


            return (
                {
                    ...state,
                    initialized: true
                }
            )

        default:

            return state;

    }
}

export const initializedSuccess = () => ({ type: INITIALIZED })

export const initializeApp = () => (dispatch) => {

    let promise = dispatch(setAuthUserDataThunk());

    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        })
}



export default appReducer;