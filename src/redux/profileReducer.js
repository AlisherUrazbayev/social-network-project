const ADD_POST = 'ADD-POST';
const NEW_POST_CHANGE = 'NEW-POST-CHANGE';

let initialState = {

    posts: [
        { id: 1, message: 'Defeated count Douku', likeCount: 1920 },
        { id: 2, message: 'Outer rim sigeses won', likeCount: 560 },
        { id: 3, message: 'Enemy starship destroyed', likeCount: 1560 },
        { id: 4, message: 'Relot was libirated', likeCount: 240 },
    ],
    newPost: 'some text here'

}


const profileReducer = (state = initialState, action) => {

    switch (action.type){

        case NEW_POST_CHANGE: 

        return (
            {
                ...state,
                newPost: action.newPost
            }
        )

        case ADD_POST:

            let newPost = {
                id: 5,
                message: state.newPost,
                likeCount: 0
            };

            return (
                {
                    ...state,
                    posts: [...state.posts, newPost],
                    newPost: ''
                }
            )

        default:
            return state;

    }
}

export const addPostActionCreator = () => ({type: ADD_POST })
export const updateNewPostChangeActionCreator = (text) => ({
    type: NEW_POST_CHANGE, newPost: text
})



export default profileReducer;