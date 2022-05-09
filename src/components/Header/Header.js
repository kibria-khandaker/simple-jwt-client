import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">SignUp</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/orders">Orders</Link>

        </div>
    );
};

export default Header;