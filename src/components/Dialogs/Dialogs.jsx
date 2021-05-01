import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

const Dialogs = () => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/1'>Obi-Wan Kenobi</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Master Yoda</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Ashoka Tano</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>Meis-Windu</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5'>Chancelor Palpatine</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/6'>Senate</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs;