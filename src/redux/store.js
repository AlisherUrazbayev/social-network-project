import { act } from "react-dom/test-utils";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";


let store = {

    _state: {

        profilePage: {
    
            posts: [
                { id: 1, message: 'Defeated count Douku', likeCount: 1920 },
                { id: 2, message: 'Outer rim sigeses won', likeCount: 560 },
                { id: 3, message: 'Enemy starship destroyed', likeCount: 1560 },
                { id: 4, message: 'Relot was libirated', likeCount: 240 },
            ],
            newPost: 'some text here'
        },
        dialogsPage: {
    
            messages: [
                { id: 1, message: 'Hello there' },
                { id: 2, message: 'Contact me as soon as possible' },
                { id: 3, message: 'The briefing is in session, Anakin' }
            ],
    
            newMessage: '',
    
            dialogs: [
                { id: 1, name: 'Obi-wan Kenobi' },
                { id: 2, name: 'Padme Amidala' },
                { id: 3, name: 'Ashoka Tano' },
                { id: 4, name: 'Master Yoda' },
                { id: 5, name: 'Mies Windu' },
                { id: 6, name: 'Chancelor Palpatine' }
            ],
    
        },
        sidebar: {}
    
    },

    _callSubscriber() {
        console.log('state changed')
    },

    subscribe(observer) {
        this._callSubscriber = observer; //pattern observer
    },

    getState() {

        return this._state;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
        this._state.sidebar = sidebarReducer(this._state.sidebar,action);

        this._callSubscriber(this._state);

    },

}



window.store = store;
export default store;