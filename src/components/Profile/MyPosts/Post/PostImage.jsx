import React from 'react';
import s from './Post.module.css'; 

const PostImage = (props) => {

    //debugger;
    //onClick = {`${likeButtonHendler()}`}

    return (
        <div className={s.item}>
            <img src={props.userPhoto} alt="profilePostsImage"/>
        </div>
    )
}

export default PostImage;