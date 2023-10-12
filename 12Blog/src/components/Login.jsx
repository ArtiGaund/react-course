import React,{ useState } from 'react';
// for clickable and redirections
import { Link, useNavigate } from 'react-router-dom'
// login from authSlice, changing name of login to authLogin
import { login as authLogin } from '../store/authSlice'
// import { Button, Input, Logo } from './index'
// authServices
import authService from '../appwrite/auth'
import { useDispatch } from 'react-redux';
// important
import { useForm } from 'react-hook-form'
import {
     Card, 
     CardHeader,
     Typography,
     CardBody,
     Checkbox,
     CardFooter,
     Button,
     Input,
 } from '@material-tailwind/react';


function Login(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const login = async(data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData));
                navigate("/all-posts")
            }
        } catch (error) {
            setError(error.message)
        }
    }


    return (
        <div className='flex items-center justify-center w-full'>
            {/* <div className={`mx-auto w-full max-w-lg rounded-xl p-10 border `}> */}
                {/* <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div> */}
                {/* <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                        Don&apos;t have any account?&nbsp;
                    <Link
                            to="/signup"
                            className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p> */}
                {/* displaying error */}
                {error && <p className='text-red-500  text-center mt-8'>{error}</p>}
                {/* form */}
                {/* handleSubmit is a method given by react hook form where you pass your own method login created above,
                handleSubmit is an event, when input field is used in form there we use register provided by useForm()
                the value written over there we dnt have to manage the state of them, it will automatically pick the 
                value and while handleSubmit it will take all the values*/}
                
                <form onSubmit={handleSubmit(login)} className='mt-8'>
                    {/* <div className='space-y-5'>
                        <Input
                        label="Email: "
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                            }
                        })}
                        />
                        <Input
                        label="Password: "
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", {
                            required: true,
                        })}
                        />
                        <Button
                        type="submit"
                        className="w-full"
                        >Sign in</Button>
                    </div> */}
                    <Card className='w-96'>
                        <CardHeader
                        variant='gradient'
                        color='gray'
                        className='mb-4 grid h-28 place-items-center'
                        >
                            <Typography variant='h3' color='white'>Sign In</Typography>
                        </CardHeader>
                        <CardBody className='flex flex-col gap-4'>
                            <Input
                             label='email'
                              size='lg'
                              type="email"
                                {...register("email", {
                                    required: true,
                                    validate: {
                                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                    }
                                })}
                              />
                            <Input 
                            label='password'
                             size='lg'
                             type="password"
                            {...register("password", {
                                required: true,
                            })}
                             />
                        </CardBody>
                        <CardFooter className='pt-0'>
                            <Button variant='gradient' fullWidth type="submit">Sign In</Button>
                            <Typography variant='small' className='mt-6 flex justify-center'>
                                Don&apos;t have a account?
                                <Typography
                                as="a"
                                href='#'
                                variant='small'
                                color='blue-gray'
                                className='ml-1 font-bold hover:underline'
                                onClick={() => navigate("/signup")}
                                >
                                    {/* <Link to={"/signup"}> */}
                                    Sign Up
                                    {/* </Link> */}
                                </Typography>
                            </Typography>
                        </CardFooter>
                    </Card>
                 </form>
            {/* </div> */}
        </div>
    );
};



export default Login;