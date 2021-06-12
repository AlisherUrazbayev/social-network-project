import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getUserProfile} from './../../redux/profileReducer'
import { Redirect, withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/hoc';
import { compose } from 'redux';


class ProfileContainer extends React.Component {


    constructor(props) {
        super(props);

    }

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId)

        
    }

    render() {

     

        return(
            <>
            <Profile {...this.props} userProfile={this.props.userProfile} />
            </>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        isLoggedIn: state.auth.isLoggedIn
    }
}


export default compose (
    connect(mapStateToProps,{getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)