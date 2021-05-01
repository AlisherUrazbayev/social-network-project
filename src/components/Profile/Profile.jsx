import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';  

const Profile = () => {
    return <div>
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Embl%C3%A8me_de_l%27Ordre_Jedi.svg/1200px-Embl%C3%A8me_de_l%27Ordre_Jedi.svg.png"></img>
        </div>
        <div>
            ava + description
        </div>
    <MyPosts />
    </div>
}

export default Profile;