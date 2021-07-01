import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import logo from './../../assets/images/imageLogo.jpeg'
import { AppBar, Typography, CssBaseline, Toolbar, IconButton, Badge, Button, Link } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    username: {
        paddingLeft: '10px'
    }

}));

const Header = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position='relative'>
                <Toolbar>
                    <Typography className={classes.title} variant='h6'>Social Network</Typography>
                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label='show 4 new mails' color="inherit" >
                            <NavLink className={classes.text} to='/dialogs'>
                                <MailIcon />
                            </NavLink>
                        </IconButton>
                        <IconButton aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={17} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton edge="end" color="inherit">
                            <AccountCircle />
                        </IconButton>
                    </div>
                    <div className={classes.username}>
                        {props.login}
                    </div>
                    {props.isLoggedIn ? <Button color='inherit' onClick={() => { props.logout() }}>Log out</Button> :
                     <Button color='inherit'><NavLink to={'/login'}>Login</NavLink> </Button>}
                </Toolbar>
            </AppBar>
        </div>


    )
}

export default Header;
