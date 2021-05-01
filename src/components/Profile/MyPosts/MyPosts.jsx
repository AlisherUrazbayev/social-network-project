import React from 'react';
import s from './MyPosts.module.css'; 
import Post from './Post/Post'; 

const MyPosts  = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                <Post message = {`Hi, how are you?`} likeCount = {15}/>
                <Post message = {`This is my first post`} likeCount = {20}/>
            </div>
        </div>
    )  
}

export default MyPosts;