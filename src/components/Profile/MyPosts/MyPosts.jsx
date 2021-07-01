import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import PostImage from './Post/PostImage'
import Preloader from './../../common/preloader/Preloader'
import { addPostActionCreator, updateNewPostChangeActionCreator } from '../../../redux/profileReducer'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Typography, IconButton, Paper, Link, TextField,Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import classes from './MyPosts.module.css';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(3),
        marginLeft: theme.spacing(6),
        width: theme.spacing(109),
        height: theme.spacing(30),
      },
    },
    img:  {
        width: theme.spacing(50),
        height: theme.spacing(35),
        border: '0',
    },
    infoText: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginLeft: theme.spacing(5),
        marginRight: theme.spacing(5),
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
    },
    header: {
        borderStyle: 'none none groove none',
        borderWidth: "3px",
        
    },
    aboutMeContent: {
        borderStyle: 'soild',
        paddingBottom: theme.spacing(10),
        paddingTop: theme.spacing(2),
    },
    contactLinks: {
        display:'flex',
        justifyContent: 'space-around',
        paddingTop: theme.spacing(1),
    },
    descriptionText: {
        paddingBottom: theme.spacing(5),
        paddingTop: theme.spacing(1),
    },
    posts: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap'
    },
    form: {
        margin: theme.spacing(2),
    }
  }));


const MyPosts = (props) => {

    const classes = useStyles();

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
            <div className={classes.header}>
                    <Typography align='center' color='primary' variant='h5'>My posts</Typography>
                </div>
            <div>
                <div className={classes.form}>
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
                .max(100, 'Must be 100 character or less')
        }),
        onSubmit: values => {
            console.log(values.post);
            props.addPost(values.post)
        }
    });

    return (
        <form  onSubmit={formik.handleSubmit}>
            <TextField id='post' name='post'
                onChange={formik.handleChange}
                value={formik.values.message}
                onBlur={formik.handleBlur}
                variant='outlined'
                multiline rows={5}
                rowsMax={10}
                placeholder='Type your post here' />

            {formik.touched.post && formik.errors.post ? (
                <div>{formik.errors.post}</div>
            ) : null}


            <br />

            <Button color='primary' type='submit'>Add Post</Button>
            <Button color='primary' type='reset'>Clear</Button>
        </form>
    )
}

export default MyPosts; 



{/* <div className={classes.root}>
            <Paper>
                <div className={classes.header}>
                    <Typography align='center' color='primary' variant='h5'>My posts</Typography>
                </div>
                <div>
                    <TextField variant='outlined' multiline rows={5} rowsMax={10} />
                </div>
                <div className={classes.posts}>
                    <PostImage userPhoto={props.userProfile.photos.small} />
                    {postsElements}
                </div>
            </Paper>
        </div> */}