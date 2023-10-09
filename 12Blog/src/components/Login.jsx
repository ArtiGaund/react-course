import React,{ useState } from 'react';
// for clickable and redirections
import { Link, useNavigate } from 'react-router-dom'
// login from authSlice, changing name of login to authLogin
import { login as authLogin } from '../store/authSlice'
import { Button, Input, Logo } from './index'
// authServices
import authService from '../appwrite/auth'
import { useDispatch } from 'react-redux';
// important
import { useForm } from 'react-hook-form'

function Login(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    // state to display error
    const [ error, setError ] = useState("")

    const login = async(data) => {
        // setError will store error message in state
        setError("")
        try {
            const session = await authService.login(data)
            if(session)
            {
                // await is used bz data we are collecting is not from any session,we are calling getCurrentUser method
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData));
                // when user is login, then send it to root
                navigate("/");
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className='flex items-center justify-center w-full'>
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className='mb-2 flex justify-center'>
                    <span className='inline-block w-full max-w-[100px]'>
                        <Logo width='100%'/>
                    </span>
                </div>
                <h2 className='text-center text-2xl font-bold leading-tight'>
                    Sign in to your account
                </h2>
                <p className='mt-2 text-center text-base text-black/60'>
                    Don&apos;t have any account ? &nbsp;
                    <Link
                    to="/signup"
                    className='font-medium text-primary transition-all duration-200 hover:underline'
                    >Sign up</Link>
                </p>
                {/* displaying error */}
                {error && <p className='text-red-500  text-center mt-8'>{error}</p>}
                {/* form */}
                {/* handleSubmit is a method given by react hook form where you pass your own method login created above,
                handleSubmit is an event, when input field is used in form there we use register provided by useForm()
                the value written over there we dnt have to manage the state of them, it will automatically pick the 
                value and while handleSubmit it will take all the values*/}
                
                <form onSubmit={handleSubmit(login)} className='mt-8'>
                    <div className='space-y-5'>
                        {/* component input */}
                        <Input 
                        label="Email:"
                        placeholder="Enter your email"
                        type="email"
                         {...register("email", {
                            required: true,
                            validate: {
                                matchPattern: (value) =>  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                            }
                         })}
                        />
                        <Input 
                        label="Password: "
                        placeholder="Enter your password"
                        type="password"
                        {...register("password", {
                            required: true,
                        })}
                        />
                        <Button
                        type='submit'
                        className='w-full'
                        >Sign in</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};



export default Login;