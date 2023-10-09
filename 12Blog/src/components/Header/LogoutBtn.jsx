import React from 'react';
// after logout to perform some action,useDispatch is used
import { useDispatch } from 'react-redux'
// auth Service, logout is in this
import authService from '../../appwrite/auth'
// logout individual service
import { logout } from '../../store/authSlice'

function LogoutBtn(){
    const dispatch = useDispatch();
    // logout handler for button
    const logoutHandler = () => {
        authService.logout().then(() => {
            // to keep information in store updated
            dispatch(logout())
        })
    }
    return (
        <button 
        className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
        onClick={logoutHandler}
        >Logout</button>
    );
};



export default LogoutBtn;