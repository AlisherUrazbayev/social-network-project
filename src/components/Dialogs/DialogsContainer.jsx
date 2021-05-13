import React from 'react';
import { connect } from 'react-redux';
import {addMessageActionCreator,updateNewMessageTextActionCreator} from '../../redux/dialogsReducer'
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {

    return {
        messages: state.dialogsPage.messages,
        newMessage: state.dialogsPage.newMessage,
        dialogs: state.dialogsPage.dialogs
    }

}

const mapDispatchToProps = (dispatch) => {

    return {

        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        updateNewMessage: (text) => {
            let action = updateNewMessageTextActionCreator(text);
            dispatch(action);
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer; 