import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getUserProfile} from './../../redux/profileReducer'
import { Redirect, withRouter } from 'react-router-dom';


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

        if(!this.props.isLoggedIn) return <Redirect to={'/login'}/>

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

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps,{getUserProfile})(WithUrlDataContainerComponent);