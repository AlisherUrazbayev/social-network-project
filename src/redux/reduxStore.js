import {applyMiddleware, combineReducers, createStore} from 'redux';
import authReducer from './auth-reducer';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';
import ReduxThunk from 'redux-thunk'



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(ReduxThunk));

window.store = store;

export default store;