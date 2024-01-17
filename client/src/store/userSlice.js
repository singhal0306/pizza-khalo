import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        registerSuccess: false,
        loginSuccess: false,
        error: '',
        currentUser: {},
    },
    reducers: {
        retriveUser(state, action){
            state.currentUser = action.payload
            state.loginSuccess = true
        },
        userRegisterRequest(state) {
            state.loading = true
        },
        userRegisterSuccess(state) {
            state.loading = false
            state.registerSuccess = true
        },
        userRegisterFails(state) {
            state.loading = false
            state.registerSuccess = false
        },
        userLoginRequest(state) {
            state.loading = true;
        },
        userLoginSuccess(state){
            state.loading = false;
            state.loginSuccess = true;
        },
        userLoginFails(state, action){
            state.loading = false;
            state.loginSuccess = false;
            state.error = action.payload
        },
        userLogout (state){
            state.loginSuccess= false;
            state.currentUser ={}
        }
    }
})

export const userAction = userSlice.actions;
export default userSlice.reducer;