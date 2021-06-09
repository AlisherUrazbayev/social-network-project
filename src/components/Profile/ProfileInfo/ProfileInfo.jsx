import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

    if (!props.userProfile) {
        return (
            <>
                <Preloader />
            </>
        )
    }

    return (
        <div className=''>
            <div>
                <img src={props.userProfile.photos.large}></img>
            </div>
            <div className={s.descreptionBlock}>
                Name: {props.userProfile.fullName}
            </div>
            <div className={s.descreptionBlock}>
                About me: {props.userProfile.aboutMe}
            </div>
            <div className={s.descreptionBlock}>
                Looking for a job: {props.userProfile.lookingForAJob === true?'In active search':'Not looking'}
            </div>
            <div className={s.descreptionBlock}>
                Descreption: {props.userProfile.lookingForAJobDescription}
            </div>
            <div className={s.descreptionBlock}>
                Contact me: <br/> {props.userProfile.contacts.github}  <br/> {props.userProfile.contacts.facebook} <br/>
                {props.userProfile.contacts.twitter}
            </div>
        </div>
    )
}

export default ProfileInfo;