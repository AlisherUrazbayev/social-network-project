import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from './../../assets/images/userPhoto.png'
import styles from './Users.module.css'
import { Typography, IconButton, Paper, Link, TextField, Button, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paginator from './Paginator'

const useStyles = makeStyles((theme) => ({
    userContainer: {
        margin: theme.spacing(2),
    }
}));

const Users = (props) => {

    const classes = useStyles();


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return (
        <div>
            <div>
                <Paper className={classes.userContainer}>
                    <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} currenPage={props.currenPage}
                        onPageChanged={props.changeCurrentPage} portionSize='10' />
                </Paper>
            </div>
            {
                props.users.map(u => <Paper className={classes.userContainer} key={u.id} >
                    <span>
                        <div >
                            <NavLink to={'/profile/' + u.id}>
                                <Avatar src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                            </NavLink>
                        </div>
                        <div>
                            {

                                u.followed
                                    ? <Button color='primary' disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                        props.unfollow(u.id);
                                    }}
                                    >unfollow</Button>

                                    : <Button color='primary' disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                        props.follow(u.id)
                                    }}
                                    >follow</Button>
                            }
                        </div>
                    </span>
                    <span>
                        <Typography>{u.name}</Typography>
                        <Typography>{u.status}</Typography>
                    </span>

                </Paper>)
            }
        </div>
    )
}

export default Users;

// {pages.map((p) => {
//     return <count onClick={(e) => { props.changeCurrentPage(p) }} className={props.currentPage === p && styles.currentPage}>{p}</count>
// })}
