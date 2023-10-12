import React from 'react';
import {
    Button,
    Collapse,
    IconButton,
    List,
    ListItem,
Navbar, 
Typography,
} from "@material-tailwind/react"
import {
    Bars3Icon,
    HomeModernIcon,
    PhotoIcon,
    Square3Stack3DIcon,
    UserCircleIcon,
XMarkIcon,
} from "@heroicons/react/24/outline"

const NavItem = [
    {
        name: "Home",
        // slug: "#",
        active: true,
        icon: <HomeModernIcon className='h-[18px] w-[18px]'/>,
    },
    {
        name: "Posts",
        // slug: "#",
        active: false,
        icon: <Square3Stack3DIcon className='h-[18px] w-[18px]'/>,
    },
    {
        name: "Add Post",
        // slug: "#",
        active: false,
        icon: <PhotoIcon className='h-[18px] w-[18px]'/>,
    },
    {
        name: "Account",
        // slug: "#",
        active: false,
        icon: <UserCircleIcon className='h-[18px] w-[18px]'/>,
    }
]

function NavList(){
    return(
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
             {NavItem.map(({ name, active, icon, index}) => (
                <Typography
                key={index}
                as="a"
                href="#"
                variant='small'
                color={active ? 'blue-gray' : 'gray'}
                className='font-normal'
                >
                    <ListItem className='flex items-center gap-2 py-2 pr-4'>
                        {icon}
                        {name}
                    </ListItem>
                </Typography>
             ))}
        </List>
    )
}
 function Header(){
    const [ openNav, setOpenNav ] = React.useState(false);
    React.useEffect(() => {
        window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false)
        )
    },[])
    return (
        <Navbar className='mx-auto max-w-screen-xl px-4 py-2'>
            <div className='flex items-center justify-between text-blue-gray-900'>
                {/*icon  */}
                <Typography
                as="a"
                href='#'
                variant='h6'
                className='mr-4 cursor-pointer py-1.5 lg:ml-2'
                >
                    Arti Gaund
                </Typography>
                {/* navlist */}
                <div className='hidden lg:block'>
                    <NavList />
                </div>
                <div className='hidden gap-2 lg:flex'>
                    <Button variant='text' size='sm' color='blue-gray'>Sign In</Button>
                    <Button variant='gradient' size='sm'>Sign Up</Button>
                </div>
                
           
                <IconButton
                variant='text'
                color='blue-gray'
                className='lg:hidden'
                onClick={()=> setOpenNav(!openNav)}
                >
                    {openNav ? 
                    <XMarkIcon className='h-6 w-6' strokeWidth={2}/> : <Bars3Icon className='h-6 w-6' strokeWidth={2}/>}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
                <div className='flex w-full flex-nowrap items-center gap-2 lg:hidden'>
                    <Button variant='outlined' size='sm' color='blue-gray' fullWidth>Sign In</Button>
                    <Button variant='gradient' size='sm' fullWidth>Sign Up</Button>
                </div>
            </Collapse>
        </Navbar>
    );
};

export default Header
