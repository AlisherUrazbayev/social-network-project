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
            <ProfileInfo updateProfileStatus={props.updateProfileStatus} profileStatus={props.profileStatus}
             userProfile={props.userProfile} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;