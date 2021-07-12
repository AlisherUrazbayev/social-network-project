import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Preloader from '../../common/preloader/Preloader';
import userPhoto from './../../../assets/images/avatarPhoto.jpeg'
import { Typography, IconButton, Paper, Link, Avatar, Button, TextField, Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WebIcon from '@material-ui/icons/Web';
import ProfileStatusHooks from './../ProfileStatus/ProfileStatusHooks';
import { connect } from 'react-redux';
import {saveProfile} from './../../../redux/profileReducer'
import { withAuthRedirect } from '../../../hoc/hoc';
import { compose } from 'redux';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(3),
            marginLeft: theme.spacing(6),
            width: theme.spacing(50),
            height: theme.spacing(60),
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
    }
}));

const ProfileSettings = (props) => {


    const classes = useStyles();

    const [name, setName] = useState(props.userProfile.fullName);
    const [jobSearch, setJobSearch] = useState(props.userProfile.lookingForAJob);
    const [aboutMe, setAboutMe] = useState(props.userProfile.aboutMe);
    const [jobDescription, setJobDescription] = useState(props.userProfile.lookingForAJobDescription);

    const inputNameHandler = (e) => {
        setName(e.target.value);
    }

    const inputJobSearchHandler = (e) => {
        setJobSearch(!jobSearch);
    }

    const inputAboutMeHandler = (e) => {
        setAboutMe(e.target.value);
    }

    const inputJobDescriptionHandler = (e) => {
        setJobDescription(e.target.value);
    }

    const submitValues = () => {
        
        let dataObj = {
            fullName: name,
            lookingForAJob: jobSearch,
            lookingForAJobDescription: jobDescription,
            aboutMe: aboutMe
        }
        console.log(dataObj)
        props.saveProfile(dataObj)
    }


    return (
        <div className={classes.root}>
            <Paper>
                <div className={classes.header}>
                    <Typography align='center' color='primary' variant='h5'>Profile Settings</Typography>
                </div>
                <div className={classes.infoText}>
                    <Typography color='primary' variant='h6'>Name</Typography>
                    <TextField value={name} onChange={inputNameHandler} />
                </div>
                <div className={classes.infoText}>
                    <Typography color='primary' variant='h6'>Looking for a job</Typography>
                    <Checkbox color="primary" type='checkbox' value={jobSearch} onChange={inputJobSearchHandler} checked={jobSearch}/>
                </div>
                <div className={classes.infoText}>
                    <Typography color='primary' variant='h6'>Job Description</Typography>
                    <TextField value={jobDescription} onChange={inputJobDescriptionHandler}/>
                </div>
                <div className={classes.infoText}>
                    <Typography color='primary' variant='h6'>About me</Typography>
                    <TextField value={aboutMe} onChange={inputAboutMeHandler} />
                </div>
                <div className={classes.infoText}>
                    <Button variant="contained" color="primary" onClick={submitValues}>Submit</Button>
                </div>
            </Paper>
        </div>
    )
}

const mapStateToProps = (state) => ({

    isLoggedIn: state.auth.isLoggedIn,
    userProfile: state.profilePage.userProfile,

})

export default compose(
    connect(mapStateToProps, { saveProfile }),
    withAuthRedirect
)(ProfileSettings)


