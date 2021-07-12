import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { login } from './../../redux/auth-reducer'
import { Button, Typography, TextField, Checkbox, Container, Grid, Paper } from '@material-ui/core'
import { Redirect } from "react-router-dom";
import useStyles from './../../styles'
import LockRoundedIcon from '@material-ui/icons/LockRounded';


const Login = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            { !props.isLoggedIn ? <LoginForm {...props} login={props.login} /> :
                <Redirect to={`/profile`} />}
        </div>
    )
}

const LoginForm = (props) => {

    const classes = useStyles();

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
            console.log(values)
            props.login(values.username, values.password, values.rememberMe)

        }
    });

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <LockRoundedIcon/>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} onSubmit={formik.handleSubmit}>
                    <TextField variant="outlined"
                        margin="normal"
                        required
                        autoFocus
                        fullWidth label='Email Address' id='username' name='username' type='text'
                        onChange={formik.handleChange}
                        value={formik.values.username}
                        onBlur={formik.handleBlur} />

                    {formik.touched.username && formik.errors.username ? (
                        <div className={classes.errors}>{formik.errors.username}</div>
                    ) : null}

                    <br />

                    <TextField variant="outlined"
                        margin="normal"
                        required
                        fullWidth label='Password' id='password' name='password' type='password'
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        onBlur={formik.handleBlur} />

                    {formik.touched.password && formik.errors.password ? (
                        <div className={classes.errors}>{formik.errors.password}</div>
                    ) : null}

                    <br />

                    <label>Remember me</label>
                    <Checkbox id='rememberMe' name='rememberMe' type='checkbox'
                        color="primary"
                        onChange={formik.handleChange}
                        value={formik.values.rememberMe} />

                    <br />

                    <Button className={classes.buttons} fullWidth variant="contained" color="primary" type='submit'>Sign in</Button>
                </form>
            </div>
        </Container>
    )
}

const mapStateToProps = (state) => ({

    isLoggedIn: state.auth.isLoggedIn,
})

export default connect(mapStateToProps, { login })(Login);