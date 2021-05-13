import React from 'react';
import s from './MyPosts.module.css'; 
import Post from './Post/Post'; 
import {addPostActionCreator, updateNewPostChangeActionCreator} from '../../../redux/profileReducer'

const MyPosts = (props) => {

    let postsElements = props.posts
    .map( p => <Post message={p.message} likeCount={p.likeCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {

        props.addPost();
    }
    
    let clearPost = () => {
        let text = newPostElement.current.value = '';
        props.updateNewPostText(text);
    }

    let newPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea onChange={newPostChange} ref={newPostElement}
                    value={props.newPost} />
                </div>
                <div className={s.buttons}>
                    <button onClick={addPost}>Add post</button>
                    <button onClick={clearPost}>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts; 