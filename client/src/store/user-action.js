import { userAction } from "./userSlice";
import axios from "axios";

export const isLoggedIn = () => {
    return async (dispatch) => {
        const userAvailable = localStorage.getItem('currentUser')
        if (userAvailable) {
            const currentUser = JSON.parse(localStorage.getItem('currentUser'))
            dispatch(userAction.retriveUser(currentUser))
        }

        // if (cookies.jwt) {
        //     try {
        //         const response = await axios.post("/api/users/isLoggedIn", cookies.jwt)

        //     } catch (error) {
        //         console.log(error)
        //     }
        // }
    }
}

export const userRegistration = (user) => {
    return async (dispatch) => {
        dispatch(userAction.userRegisterRequest())
        try {
            const response = await axios.post('/api/users/register', user)
            console.log(response.data.message)
            dispatch(userAction.userRegisterSuccess())
        } catch (error) {
            dispatch(userAction.userRegisterFails())
        }
    }
}

export const userLogin = (user) => {
    return async (dispatch) => {
        dispatch(userAction.userLoginRequest())
        try {
            const response = await axios.post('/api/users/login', user);
            // console.log(response.data.message)
            dispatch(userAction.userLoginSuccess(response.data.userData))
            window.location.href ="/"
        } catch (error) {
            dispatch(userAction.userRegisterFails("Invalid Credentials"))
        }
    }
}

export const userLogout = () => {
    return async (dispatch) => {
        localStorage.removeItem('currentUser')
        dispatch(userAction.userLogout())
        window.location.href = '/login'
    }
}