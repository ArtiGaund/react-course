// this work can also be done in App.jsx

import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// Outlet will use this Layout as a base, header and footer will be same and between things will keep changing
import { Outlet } from 'react-router-dom';
// in index.html we have to provide details about Outlet 
function Layout() {
    return(
        <>
            <Header />
            {/* passing page dynamically */}
            <Outlet />
            <Footer />
        </>
    )
}
export default Layout
