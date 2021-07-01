import React from 'react';
import s from './Post.module.css';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    large: {
        height: theme.spacing(10),
        width: theme.spacing(10),
    },
    imageContainer: {
        marginBottom: theme.spacing(2),
    }

}));

const PostImage = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.imageContainer}>
            <Avatar alt="Profile posts image" src={props.userPhoto} className={classes.large} />
        </div>
    )
}

export default PostImage;