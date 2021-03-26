import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "63b80ec0-abc2-4417-b8ec-43e7882d3389"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        });
    },

    deleteFollower(id) {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data
        });
    },

    createFollower(id) {
        return instance.post(`follow/${id}`).then(response => {
            return response.data
        });
    },

    getProfile(userId){
        return instance.get(`profile/${userId}`).then(response => {
            console.warn("Obsolete method. Pls use profileAPI.getProfile")
            return profileAPI.getProfile(userId);
        });
    }
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`).then(response => {
            return response.data
        });
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`).then(response => {
            return response.data
        });
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status: status}).then(response => {
            return response.data
        });
    }
}

export const authAPI = {
    authMe(){
        return instance.get(`auth/me`).then(response => {
            return response.data
        });
    },
    login(email, password, rememberMe = false){
        return instance.post(`auth/login`, {email, password, rememberMe}).then(response => {
            return response.data
        });
    },
    logout(){
        return instance.delete(`auth/login`).then(response => {
            return response.data 
        });
    },
}


