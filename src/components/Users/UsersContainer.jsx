import React from 'react'
import { connect } from 'react-redux'
import { follow, unfollow, changeCurrentPageThunk, requestUsers } from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from './../../hoc/hoc'
import { compose } from 'redux';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getIsLoggedIn, getPageSize, getTotalUsersCount, getUsers } from '../../redux/users-selectors';



class UsersContainer extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {

        this.props.requestUsers(this.props.currentPage, this.props.pageSize);

    }

    changeCurrentPage = (pageNumber) => {

        this.props.changeCurrentPageThunk(pageNumber);
        this.props.requestUsers(pageNumber, this.props.pageSize);

    }


    render() {

        console.log('render')

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
    console.log('mapStateToProps')

    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isLoggedIn: getIsLoggedIn(state),

    }

}


export default compose(
    connect(mapStateToProps, { follow, unfollow, changeCurrentPageThunk, requestUsers }),
    withAuthRedirect
)(UsersContainer);



