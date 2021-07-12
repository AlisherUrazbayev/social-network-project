import React from 'react';
import { NavLink,Route } from 'react-router-dom';
import Preloader from '../../common/preloader/Preloader';
import userPhoto from './../../../assets/images/avatarPhoto.jpeg'
import { Typography, IconButton, Paper, Link, Avatar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WebIcon from '@material-ui/icons/Web';
import ProfileStatusHooks from './../ProfileStatus/ProfileStatusHooks';
import ProfileSettings from './../ProfileSettings/ProfileSettings';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(3),
            marginLeft: theme.spacing(6),
            width: theme.spacing(50),
            height: theme.spacing(65),
        },
    },
    img: {
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
        display: 'flex',
        justifyContent: 'space-around',
        paddingTop: theme.spacing(1),
    },
    descriptionText: {
        paddingBottom: theme.spacing(5),
        paddingTop: theme.spacing(1),
    },
    link: {
        textDecoration: 'none',
        color: '#FFFFFF'
    },
    buttons: {
        margin: theme.spacing(1)
    },
    button: {
        marginRight: theme.spacing(1)
    }
}));

const ProfileInfo = (props) => {

    const classes = useStyles();

    const onPhotoSelected = (e) => {

        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }

    }

    if (!props.userProfile) {
        return (
            <>
                <Preloader />
            </>
        )
    }

    return (
        <div className={classes.root}>
            <Paper>
                <div >
                    <Typography align='center' color='primary' variant='h5'>Profile Details</Typography>
                </div>
                <div className={classes.buttons}>
                    {props.isOwner && <Button className={classes.button} color='primary' variant="contained" component="label">
                        Change photo
                        <input type="file" hidden onChange={onPhotoSelected} />
                    </Button>}
                    {props.isOwner && <Button color='primary' variant="contained" component="label">
                        <NavLink className={classes.link}  to='/profileSettings'>Change Profile</NavLink>
                    </Button>}
                </div>
                <div>
                    <Avatar variant='square' className={classes.img} src={props.userProfile.photos.large != null ? props.userProfile.photos.large : '/broken-image.jpg'} />
                </div>
                <div className={classes.infoText}>
                    <Typography color='primary' variant='h6'>Name</Typography>
                    <Typography color='inherit' variant='h6'>{props.userProfile.fullName}</Typography>
                </div>
                <div className={classes.infoText}>
                    <Typography color='primary' variant='h6'>Age</Typography>
                    <Typography color='inherit' variant='h6'>21</Typography>
                </div>
                <div className={classes.infoText}>
                    <Typography color='primary' variant='h6'>Location</Typography>
                    <Typography color='inherit' variant='h6'>Toronto</Typography>
                </div>
            </Paper>
            <Paper>
                <div className={classes.header}>
                    <Typography align='left' color='primary' variant='h5'>About me</Typography>
                </div>
                <div className={classes.aboutMeContent}>
                    <div className={classes.infoText}>
                        <Typography color='primary' variant='h6'>Name</Typography>
                        <Typography color='inherit' variant='h6'>{props.userProfile.fullName}</Typography>
                    </div>
                    <div className={classes.infoText}>
                        <Typography color='primary' variant='h6'>Job status</Typography>
                        <Typography color='inherit' variant='h6'>{props.userProfile.lookingForAJob === true ? 'In active search' : 'Not looking'}</Typography>
                    </div>
                    <div className={classes.infoText}>
                        <Typography color='primary' variant='h6'>Job description</Typography>
                        <Typography color='inherit' variant='h6'>{props.userProfile.lookingForAJobDescription}</Typography>
                    </div>
                    <div className={classes.infoText}>
                        <Typography color='primary' variant='h6'>Status</Typography>
                        <ProfileStatusHooks profileStatus={props.profileStatus} updateProfileStatus={props.updateProfileStatus} />
                    </div>
                    <div className={classes.header}>
                        <Typography align='left' color='primary' variant='h5'>Description</Typography>
                    </div>
                    <div className={classes.descriptionText}>
                        <Typography align='left' color='inhert' variant='body1'>{props.userProfile.aboutMe != null ? props.userProfile.aboutMe : <a>No info to dispay</a>}</Typography>
                    </div>
                    <div className={classes.header}>
                        <Typography align='left' color='primary' variant='h5'>Contact me</Typography>
                    </div>
                    <div className={classes.contactLinks}>
                        <IconButton color="inherit">
                            <Link href={props.userProfile.contacts.instagram != null ? props.userProfile.contacts.instagram : 'https://www.instagram.com/'} target="_blank">
                                <InstagramIcon fontSize='large' />
                            </Link>
                        </IconButton>
                        <IconButton color="inherit">
                            <Link href={props.userProfile.contacts.facebook != null ? props.userProfile.contacts.facebook : 'https://www.facebook.com/'} target="_blank">
                                <FacebookIcon fontSize='large' />
                            </Link>
                        </IconButton>
                        <IconButton color="inherit">
                            <Link href={props.userProfile.contacts.github != null ? props.userProfile.contacts.github : 'https://github.com/'} target="_blank">
                                <GitHubIcon fontSize='large' />
                            </Link>
                        </IconButton>
                        <IconButton color="inherit">
                            <Link href={props.userProfile.contacts.website != null ? props.userProfile.contacts.website : 'https://www.facebook.com/'} target="_blank">
                                <WebIcon fontSize='large' />
                            </Link>
                        </IconButton>
                    </div>
                </div>

            </Paper>
        </div>
    )
}

export default ProfileInfo;
