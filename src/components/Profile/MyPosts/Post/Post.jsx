import React from 'react';
import s from './Post.module.css'; 

const Post  = (props) => {

    //debugger;
    //onClick = {`${likeButtonHendler()}`}

    return (
        <div className={s.item}>
            {props.message}
            <div>
                <span>Likes: {props.likeCount}</span>
                <button>Like</button>
            </div>
        </div>
    )
}

export default Post;