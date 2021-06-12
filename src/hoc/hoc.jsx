import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

let mapStateToPropsForRedirect = (state) => ({

    isLoggedIn: state.auth.isLoggedIn
})

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {

        render() {

            if (!this.props.isLoggedIn) return <Redirect to={'/login'} />

            return <Component {...this.props} />

        }

    }
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}



