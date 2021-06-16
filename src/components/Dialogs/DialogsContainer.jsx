import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/hoc';
import {addMessageActionCreator,updateNewMessageTextActionCreator} from '../../redux/dialogsReducer'
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {

    return {
        messages: state.dialogsPage.messages,
        newMessage: state.dialogsPage.newMessage,
        dialogs: state.dialogsPage.dialogs,
        isLoggedIn: state.auth.isLoggedIn
    }

}

const mapDispatchToProps = (dispatch) => {

    return {

        addMessage: (message) => {
            dispatch(addMessageActionCreator(message));
        },
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)