import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { requestsAPI } from '../../api/api';
import userPhoto from './../../assets/images/userPhoto.png'
import styles from './Users.module.css'

const Users = (props) => {


    let pagesCount =  Math.ceil(props.totalUsersCount / props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

    return (
        <div>
            <div>
                {pages.map((p) => {
                    return <count onClick={(e) => { props.changeCurrentPage(p) }} className={props.currentPage === p && styles.currentPage}>{p}</count>
                })}

            </div>
            {
                props.users.map(u => <div key={u.id} >
                    <span>
                        <div >
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                            </NavLink>
                        </div>
                        <div>
                            {
                                
                                u.followed
                                    ? <button disabled={props.followingInProgress.some( id => id === u.id )} onClick={() => {
                                        props.unfollow(u.id);
                                    }}
                                    >unfollow</button>

                                    : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                        props.follow(u.id)
                                    }}
                                    >follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"Toronto"}</div>
                            <div>{"Canada"}</div>
                            <div>_______________________    </div>
                        </span>
                    </span>

                </div>)
            }
        </div>
    )
}

export default Users;