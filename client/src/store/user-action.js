import { userAction } from "./userSlice";
import { fetchCartData } from "./cart-actions";
import axios from "axios";

export const isLoggedIn = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get("/api/users/isLoggedIn")
            const currentUser = await response.data.userData;
            if(currentUser){
                dispatch(userAction.retriveUser(currentUser))
                dispatch(fetchCartData(currentUser.email));
            }
            else{
                dispatch(userAction.userLoginFails("User not found"))
            }
        } catch (error) {
            console.log(error)
        }
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
            const response =await axios.post('/api/users/login', user);
            if(response.data.message === "Login successful"){
                dispatch(userAction.userLoginSuccess())
                window.location.href = "/"
            }else{
                throw new Error("Login Failed")
            }
        } catch (error) {
            dispatch(userAction.userLoginFails("Invalid Credentials"))
        }
    }
}

export const userLogout = () => {
    return async (dispatch) => {
        const respone = axios.get("/api/users/logout")
        console.log(respone.fetchCartData)
        dispatch(userAction.userLogout())
        window.location.href = '/login'
    }
}