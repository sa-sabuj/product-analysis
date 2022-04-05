import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
    
            
            <nav>
                <Link to='/home' className='m-5 text-dark text-2xl p-4 rounded-md bg-sky-600 hover:bg-sky-700'>Home</Link>
                <Link to='/reviews' className='m-5 text-gray-900 text-2xl'>Reviews</Link>
                <Link to='/deshboard' className='m-5 text-gray-900 text-2xl'>Deshboard</Link>
                <Link to='/blogs' className='m-5 text-gray-900 text-2xl'>Blogs</Link>
                <Link to='/about' className='m-5 text-gray-900 text-2xl'>About</Link>
            </nav>
        </div>
    );
};

export default Header;