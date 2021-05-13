const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let initialState = {

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
    
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_MESSAGE: 

            let newMessage = {
                id: 4,
                message: state.newMessage
            };
            
            return (
                {
                    ...state,   
                    messages: [...state.messages , newMessage],
                    newMessage: ''
                }
            )
        

        case UPDATE_NEW_MESSAGE_TEXT: 

            return (
                {
                    ...state,
                    newMessage: action.newMessage
                }
            )
        
        default:

            return state;

    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text
})


export default dialogsReducer;