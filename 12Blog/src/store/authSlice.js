// it can also be created inside feature folder
// its for tracking user authentication for store
import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
    status : false,
    userData : null
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        login: ( state, action ) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        } 
    }
});

export default authSlice.reducer;

// exporting all the reducers
export const { login, logout } = authSlice.actions;

