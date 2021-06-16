import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import {login} from './../../redux/auth-reducer'
 
const Login = (props) => {


    return (
        <div>
            <h1>Login</h1>
            <LoginForm {...props} login ={props.login} />
        </div>
    )
} 

const LoginForm = (props) => {


    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            rememberMe: false,
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .max(30, 'Must be 30 character or less')
                .required('Required'),
            password: Yup.string()
                .max(30, 'Must be 30 character or less')
                .required('Required')
        }),
        onSubmit: values => {

            props.login(values.username, values.password,values.rememberMe)
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label>Username: </label>
            <input id='username' name='username' type='text'
                onChange={formik.handleChange}
                value={formik.values.username}
                onBlur={formik.handleBlur} />

            {formik.touched.username && formik.errors.username ? (
                <div>{formik.errors.username}</div>
            ) : null}

            <br />

            <label>Password: </label>
            <input id='password' name='password' type='password'
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur} />

            {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
            ) : null}

            <br />

            <label>Remember me</label>
            <input id='rememberMe' name='rememberMe' type='checkbox'
                onChange={formik.handleChange}
                value={formik.values.rememberMe} />

            <br />

            <button type='submit'>Submit</button>
        </form>
    )
}

export default connect(null, { login })(Login);