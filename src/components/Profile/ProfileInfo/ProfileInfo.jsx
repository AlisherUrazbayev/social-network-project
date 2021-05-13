import React from 'react';
import s from './ProfileInfo.module.css';  

const ProfileInfo = () => {
    return (
        <div className=''>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Embl%C3%A8me_de_l%27Ordre_Jedi.svg/1200px-Embl%C3%A8me_de_l%27Ordre_Jedi.svg.png"></img>
            </div>
            <div className={s.descreptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;