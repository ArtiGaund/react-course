import React, { useState } from 'react';
import authService from '../appwrite/auth';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../store/authSlice';
// import { Button, Input, Logo } from './index.js'
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
     Card, 
     CardHeader,
     Typography,
     CardFooter,
     CardBody,
     Input,
     Button, 
} from '@material-tailwind/react';

function Signup(){
    const navigate =  useNavigate()
    const dispatch = useDispatch()
    const [ error, setError ] = useState("")
    const { register, handleSubmit } = useForm()
    
    const create = async(data) => {
        setError("")
        try {
    
            const userData = await authService.createAccount(data)
            if(userData){
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(login(userData))
                navigate("/all-posts")
            }
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <div className='flex items-center justify-center'>
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl border border-black/10`}>
                {/* <div className='mb-2 flex justify-center'>
                    <span className='inline-block w-full max-w-[100px]'>
                        <Logo width='100%'/>
                    </span>
                </div> */}
                <h2 className='text-center text-2xl font-bold leading-tight'>
                    <p className='mt-2 text-center text-base text-black/60'>
                        Already have an account ? &nbsp;
                        <Link
                        to="/login"
                        className='font-medium text-primary transition-all duration-200 hover:underline'
                        >Sign in</Link>
                    </p>
                    {/* error display */}
                    {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
                    {/* form */}
                    <form onSubmit={handleSubmit(create)}>
                        {/* <div className='space-y-5'>
                            {/* component */}
                            {/* <Input 
                            label="Full Name: "
                            placeholder="Enter your full name"
                            {...register("name", {
                                required: true,
                            })}
                            />
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
                            >Create Account</Button>
                        </div> */} 
                        <Card className='w-96'>
                            <CardHeader
                            variant='gradient'
                            color='gray'
                            className='mb-4 grid h-28 place-items-center'
                            >
                                <Typography variant='h3' color='white'>Sign Up</Typography>
                            </CardHeader>
                            <CardBody  className='flex flex-col gap-4'>
                                <Input 
                                label='name'
                                size='lg'
                                {...register("name", {
                                    required: true,
                                })}
                                />
                                <Input
                                label='email'
                                size='lg'
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
                                label='password'
                                size='lg'
                                type="password"
                                {...register("password", {
                                    required: true,
                                })}
                                />
                            </CardBody>
                            <CardFooter className='pt-0'>
                            <Button variant='gradient' fullWidth type="submit">Sign Up</Button>
                            <Typography variant='small' className='mt-6 flex justify-center'>
                                Already have an account ? &nbsp;
                                <Typography
                                as="a"
                                href='#'
                                variant='small'
                                color='blue-gray'
                                className='ml-1 font-bold hover:underline'
                                onClick={() => navigate("/login")}
                                >
                                    {/* <Link to={"/signup"}> */}
                                    Sign In
                                    {/* </Link> */}
                                </Typography>
                            </Typography>
                        </CardFooter>
                        </Card>
                    </form>
                </h2>
            </div>
            
        </div>
    );
};



export default Signup;