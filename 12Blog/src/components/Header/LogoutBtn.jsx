import React from 'react';
// after logout to perform some action,useDispatch is used
import { useDispatch } from 'react-redux'
// auth Service, logout is in this
import authService from '../../appwrite/auth'
// logout individual service
import { logout } from '../../store/authSlice'
import { Button } from "@material-tailwind/react";

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
        <Button
        variant='gradient' size='sm'
        onClick={logoutHandler}
        >Logout</Button>
    );
};



export default LogoutBtn;