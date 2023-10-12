import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import { Typography } from '@material-tailwind/react';


const currentYear = new Date().getFullYear();
function Footer() {
    return (
        <footer className="w-full mt-auto fixed bottom-0">
        <div className="mx-auto w-full max-w-7xl px-8">
          <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
            <Typography
              variant="small"
              className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
            >
              &copy; {currentYear}
              {/* <img src="/img/logo-ct-dark.png" alt="logo-ct" className="w-10" /> */}
            </Typography>
           
          </div>
        </div>
      </footer>
    )
  }



export default Footer;