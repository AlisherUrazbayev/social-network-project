import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getProfileStatus, updateProfileStatus } from './../../redux/profileReducer'
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
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('./login');
            }
        }
        this.props.getUserProfile(userId)
        this.props.getProfileStatus(userId)


    }

    render() {



        return (
            <>
                <Profile {...this.props}
                    userProfile={this.props.userProfile}
                    userStatus={this.props.userStatus}
                    updateProfileStatus={this.props.updateProfileStatus} />
            </>
        )
    }

}

const mapStateToProps = (state) => {

    return {
        userProfile: state.profilePage.userProfile,
        profileStatus: state.profilePage.profileStatus,
        isLoggedIn: state.auth.isLoggedIn,
        authorizedUserId: state.auth.id
    }
}


export default compose(
    connect(mapStateToProps, { getUserProfile, getProfileStatus, updateProfileStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)