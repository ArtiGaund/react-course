import React, { useState, useEffect } from 'react';
// to ask something from store
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function Protected({ children, authentication = true }){
    const navigate = useNavigate()
    const [ loader, setLoader ] = useState(true)
    //ask authStatus whether we are login or not
    const authStatus = useSelector(state => state.auth.status)

    // useEffect will tell, whether you want me to go in login or home page, when there is change is fields so I 
    // should do again check in or not
    // authentication is given by user
    useEffect(() => {
        // todo: make it more easy
        // if(authStatus==true) navigate("/")
        // else if(authStatus==false) navigate("/login")
        // or 
        // let authValue = authStatus === true ? true : false
        if( authentication && authStatus !== authentication ){
            navigate("/login")
        } else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    }, [ authStatus, navigate, authentication ])

    return loader ? <h1>Loading...</h1> : <>{children}</>
};



