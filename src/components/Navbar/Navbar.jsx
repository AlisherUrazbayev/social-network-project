import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import { Button, Typography, TextField, Checkbox, Container, Grid, Paper, Drawer, List, ListItem, ListItemText,ListItemIcon } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MessageIcon from '@material-ui/icons/Message';
import AlbumIcon from '@material-ui/icons/Album';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SettingsIcon from '@material-ui/icons/Settings';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

    textLink: {
        color: 'white',
        fontSize: '17px',
    },
    text: {
        textDecoration: 'none',
        color: 'black'
    }

}));


const Navbar = () => {

    const classes = useStyles();


    return (
        <nav className={s.nav}>
            <List component='nav'>
                <ListItem button>
                    <NavLink to='/profile'></NavLink>
                    <ListItemIcon>
                        <AccountCircleIcon />
                    </ListItemIcon>
                    <div className={classes.textLink}>
                    <NavLink className={classes.text} to='/profile'>Profile</NavLink>
                    </div>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <MessageIcon />
                    </ListItemIcon>
                    <div className={classes.textLink}>
                    <NavLink className={classes.text} to='/dialogs'>Messages</NavLink>
                    </div>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <div className={classes.textLink}>
                    <NavLink className={classes.text} to='/news'>News</NavLink>
                    </div>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <AlbumIcon/>
                    </ListItemIcon>
                    <div className={classes.textLink}>
                    <NavLink className={classes.text} to='/music'>Music</NavLink>
                    </div>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <PeopleAltIcon />
                    </ListItemIcon>
                    <div className={classes.textLink}>
                    <NavLink className={classes.text} to='/users'>Users List</NavLink>
                    </div>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <SettingsIcon/>
                    </ListItemIcon>
                    <div className={classes.textLink}>
                    <NavLink className={classes.text} to='/settings'>Settings</NavLink>
                    </div>
                </ListItem>
            </List>
        </nav>
    )
}

export default Navbar;

/* 

<nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/profile' activeClassName={s.active}>Profile </NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/news' activeClassName={s.active}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/settings' activeClassName={s.active}>Settigns</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/users' activeClassName={s.active}>User List</NavLink>
        </div>
    </nav>


    */