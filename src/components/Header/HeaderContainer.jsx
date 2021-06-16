import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {setAuthUserDataThunk,logout} from './../../redux/auth-reducer'

import { requestsAPI } from '../../api/api';

class HeaderContainer extends React.Component {

    componentDidMount() {

        this.props.setAuthUserDataThunk();
        
    }

    render() {

        return (
            <>
                <Header {...this.props} logout={this.props.logout} />
            </>
        )

    }
}

const mapStateToProps = (state) => {

    return {
        id: state.auth.id,
        email: state.auth.email,
        login: state.auth.login,
        isLoggedIn: state.auth.isLoggedIn
    }
    
}


export default connect(mapStateToProps,{setAuthUserDataThunk,logout})(HeaderContainer);