import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer'
import { Redirect } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';



const Dialogs = (props) => {


    let dialogsElements = props.dialogs
        .map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);

    let messagesElements = props.messages
        .map(m => <Message message={m.message} key={m.id} />);



    let addMessage = (message) => {

        props.addMessage(message);
    }




    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <TextAreaForm addMessage={addMessage} />
            </div>
        </div>
    )
}

const TextAreaForm = (props) => {

    const formik = useFormik({
        initialValues: {
            message: ''
        },
        validationSchema: Yup.object({
            message: Yup.string()
                .max(15, 'Must be 15 character or less')
                .required('Required'),
        }),
        onSubmit: values => {
            console.log(values.message);
            props.addMessage(values.message)
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <textarea id='message' name='message'
                onChange={formik.handleChange}
                value={formik.values.message}
                onBlur={formik.handleBlur} />

            {formik.touched.message && formik.errors.message ? (
                <div>{formik.errors.message}</div>
            ) : null}


            <br />

            <button type='submit'>Submit</button>
        </form>
    )
}

export default Dialogs;