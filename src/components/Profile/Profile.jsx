import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';  
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import ProfileStatusHooks from './ProfileStatus/ProfileStatusHooks';


const Profile = (props) => {

    return (
        <div >
            <ProfileInfo userProfile={props.userProfile} />
            <ProfileStatusHooks profileStatus={props.profileStatus} updateProfileStatus={props.updateProfileStatus}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;