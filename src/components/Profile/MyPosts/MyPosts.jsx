import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import PostImage from './Post/PostImage'
import Preloader from './../../common/preloader/Preloader'
import { addPostActionCreator, updateNewPostChangeActionCreator } from '../../../redux/profileReducer'
import { useFormik } from 'formik';
import * as Yup from 'yup';


const MyPosts = (props) => {


    if (!props.userProfile) {
        return (
            <>
                <Preloader />
            </>
        )
    }


    let postsElements = props.posts
        .map(p => <Post message={p.message} likeCount={p.likeCount} />);


    let addPost = (post) => {

        props.addPost(post);
    }

    console.log('render');
    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <TextAreaForm addPost={addPost} />
                </div>
            </div>
            <div className={s.posts}>
                <PostImage userPhoto={props.userProfile.photos.small} />
                {postsElements}
            </div>
        </div>
    )
}

const TextAreaForm = (props) => {

    const formik = useFormik({
        initialValues: {
            post: ''
        },
        validationSchema: Yup.object({
            post: Yup.string()
                .max(15, 'Must be 15 character or less')
                .required('Required'),
        }),
        onSubmit: values => {
            console.log(values.post);
            props.addPost(values.post)
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <textarea id='post' name='post'
                onChange={formik.handleChange}
                value={formik.values.message}
                onBlur={formik.handleBlur} />

            {formik.touched.post && formik.errors.post ? (
                <div>{formik.errors.post}</div>
            ) : null}


            <br />

            <button type='submit'>Add Post</button>
            <button type='reset'>Clear</button>
        </form>
    )
}

export default MyPosts; 