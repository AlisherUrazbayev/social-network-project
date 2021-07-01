import React from 'react';
import s from './Post.module.css'; 
import { Typography, IconButton, Paper, Link, TextField, Button,} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles((theme) => ({
   post: {
       marginBottom: theme.spacing(2),
   }
  }));

const Post = (props) => {

    const classes = useStyles();

    return (
        <div className={s.item}>
            <Paper className={classes.post}>
                <Typography>{props.message}</Typography>
                <div>
                    <Typography>Likes: {props.likeCount}</Typography>
                    <IconButton>
                        <FavoriteBorderIcon />
                    </IconButton>
                </div>
            </Paper>
        </div>
    )
}

export default Post;