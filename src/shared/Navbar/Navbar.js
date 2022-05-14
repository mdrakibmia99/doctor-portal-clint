import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import CustomLink from '../../components/CustomLink/CustomLink';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    const menuItems = <>
        <li><CustomLink to='/home'>Home</CustomLink></li>
        <li><CustomLink to='/about'>About</CustomLink></li>
        <li><CustomLink to='/appointment'>Appointment</CustomLink></li>
        <li><CustomLink to='/reviews'>Reviews</CustomLink></li>
        <li><CustomLink to='/contactUs'>Contact Us</CustomLink></li>
        <li> {user? <button className='py-4 px-2 ' onClick={()=>signOut(auth)} >Sign Out</button>:<CustomLink to='/login'>Login</CustomLink>} </li>
    </>
    return (
        <div className="navbar bg-white shadow-lg  fixed z-50 top-0 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact  dropdown-content shadow bg-base-100 rounded-box w-52 ">
                        {menuItems}
                    </ul>
                </div>
                <CustomLink to='/' className="text-xl whitespace-nowrap">Doctors Portal</CustomLink>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal whitespace-nowrap">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;