const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let initialState = {

    messages: [
        { id: 1, message: 'Hello there' },
        { id: 2, message: 'How are you, my friend?' },
        { id: 3, message: 'What is your plan for a weekend?' }
    ],



    dialogs: [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Edward Mitchell' },
        { id: 3, name: 'Robert Willington' },
        { id: 4, name: 'Ned Stark' },
        { id: 5, name: 'Luke Smith' },
        { id: 6, name: 'Luke Smith' },
    ],

}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_MESSAGE:

            let count = state.messages.length
            count++
            let newMessage = {
                id: count,
                message: action.message
            };

            return (
                {
                    ...state,
                    messages: [...state.messages, newMessage],
                }
            )

        default:

            return state;

    }
}

export const addMessageActionCreator = (message) => ({type: ADD_MESSAGE, message})



export default dialogsReducer;