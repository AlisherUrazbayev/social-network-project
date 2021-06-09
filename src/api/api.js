import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'd49db146-4c05-4ab8-b451-6ea04a6cf58b'
    }
});

export const requestsAPI = {

    getUsers: function (currentPage, pageSize) {

        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });

    },

    getUserProfile: function (userId) {

        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })

    },

    getMineAuth: function () {

        return instance.get(`auth/me`)
            .then(respone => {
                return respone.data
            })

    },

    followUser: function (userId) {

        return instance.post(`follow/${userId}`, {})
            .then(respone => {
                return respone.data;
            })

    },

    unfollowUser: function (userId) {

        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })

    }
}