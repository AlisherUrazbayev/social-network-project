import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';  
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileStatus from './ProfileStatus/ProfileStatus';


const Profile = (props) => {

    return (
        <div >
            <ProfileInfo userProfile={props.userProfile} />
            <ProfileStatus profileStatus={props.profileStatus} updateProfileStatus={props.updateProfileStatus}/>
            <MyPostsContainer store = {props.store} userProfile={props.userProfile} />
        </div>
    )
}

export default Profile;