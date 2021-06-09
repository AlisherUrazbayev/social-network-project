import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

import {addMessageActionCreator,updateNewMessageTextActionCreator} from '../../redux/dialogsReducer'
import { Redirect } from 'react-router-dom';



const Dialogs = (props) => {


    let dialogsElements = props.dialogs
    .map( d => <DialogItem name ={d.name} key={d.id} id={d.id}/>);

    let messagesElements = props.messages
    .map( m => <Message message={m.message} key={m.id} />);

    let messageElement = React.createRef();

    let addMessage = () => {

        props.addMessage();
    }
    let updateNewMessage = () => {

        let text = messageElement.current.value;
        props.updateNewMessage(text);
        
    }


    if(!props.isLoggedIn) return <Redirect to={'/login'}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea placeholder='Enter your message' onChange={updateNewMessage} ref={messageElement} value={props.newMessage}></textarea>
                <button className={s.button1} onClick={addMessage}>Submit</button>
            </div>
        </div>
    )
}

export default Dialogs;