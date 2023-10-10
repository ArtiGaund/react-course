import React from 'react';
// using container
import { Container, Logo, LogoutBtn } from '../index';
// Links for redirections
import { Link, useNavigate } from 'react-router-dom';
// selector to check in store whether user is login or not
import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';


function Header(){
    // taking out from state whether its authenticated or not
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()

    // when this type of navigation is made, we take array and loop through it, array contain multiple objects
    // slug means where url is going
    const navItems = [
        {
            name: "Home",
            slug: "/",
            active: true,
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ]

    return(
        <header className='py-3 shadow bg-gray-500'>
            <Container>
                <nav className='flex'>
                    <div className='mr-4'>
                        <Link to="/">
                            <Logo width='70px'/>
                        </Link>
                    </div>
                    <ul className='flex ml-auto'>
                        {/* we work whether item is active */}
                        {navItems.map(( item ) => 
                        item.active ? (
                            <li key={item.name}>
                                <button
                                onClick={() => navigate(item.slug)}
                                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                                >{item.name}</button>
                            </li>
                        ) : null
                        )}
                        {authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}



export default Header;