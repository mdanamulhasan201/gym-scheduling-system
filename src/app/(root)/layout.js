import Footer from '@/Components/shared/Footer';
import Navbar from '@/Components/shared/Navbar';
import React from 'react';

const layout = ({ children }) => {
    return (
        <div>
            <Navbar/>
            { children }
            <Footer/>
        </div>
    );
};

export default layout;