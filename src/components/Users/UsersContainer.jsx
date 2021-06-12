import React from 'react'
import { connect } from 'react-redux'
import { follow, unfollow, changeCurrentPageThunk, getUsers } from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from './../../hoc/hoc'
import { compose } from 'redux';



class UsersContainer extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize);

    }

    changeCurrentPage = (pageNumber) => {

        this.props.changeCurrentPageThunk(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);

    }


    render() {


        return (
            <>
                <div>
                    {this.props.isFetching ? <Preloader /> : null}
                </div>
                <Users users={this.props.users}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    changeCurrentPage={this.changeCurrentPage}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        )

    }
}

const mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isLoggedIn: state.auth.isLoggedIn

    }

}


export default compose(
    connect(mapStateToProps, { follow, unfollow, changeCurrentPageThunk, getUsers }),
    withAuthRedirect
)(UsersContainer);


