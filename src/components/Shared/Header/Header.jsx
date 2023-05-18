import React from 'react';
import { FaAngleDown, FaHeart, FaSearch, FaSignOutAlt } from "react-icons/fa";
import './Header.css'
import logo from '/logo.png'
import menicon from '/images/men-icon.webp'
import caricon from '/images/caricon.webp'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header >
            <section className='topbar relative bg-[#222222] py-4'>
                <div className='container mx-auto px-2 md:px-0 lg:px-10 flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <input className='bg-transparent border-b border-slate-100 w-[200px] focus:border-b focus:border-slate-100 focus:outline-none caret-slate-100' type="search" name="search" id="" placeholder='Search' />
                        <FaSearch className='text-white'></FaSearch>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='text-slate-100 flex items-center gap-2'>
                            <FaHeart></FaHeart>
                            <span>Wishlist</span>
                        </div>
                        \
                        <div className='text-slate-100 flex items-center gap-2'>
                            <span>USD $</span>
                            <FaAngleDown></FaAngleDown>
                        </div>
                        \
                        <div className='text-slate-100 flex items-center gap-2'>
                            <span>Language</span>
                            <FaAngleDown></FaAngleDown>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container mx-auto px-2 md:px-0 lg:px-10 py-6 flex items-center justify-between'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className='flex items-center justify-end gap-10'>
                    <div className='flex items-center gap-2'>
                        <img src={menicon} alt="" />
                        <div>
                            <h3 className='font-bold text-[16px]'>24x7 support</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src={caricon} alt="" />
                        <div>
                            <h3 className='font-bold text-[16px]'>Worldwide delivery</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </section>
            <nav className='bg-[#09CCD0]'>
                <div className='container px-2 md:px-0 lg:px-10 py-4 flex justify-between items-center'>
                    <div className='font-extrabold text-white text-[18px] flex gap-5'>
                        <NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                        <NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>All Toys</NavLink>
                        <NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>My Toys</NavLink>
                        <NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>Add a toy</NavLink>
                        <NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>Blogs</NavLink>
                        <NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>Login</NavLink>
                        <NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>Register</NavLink>
                    </div>
                    <div className='flex items-center gap-3'>
                        <button className='bg-[#FF6F69] rounded-full py-1 px-6 text-white font-light flex items-center gap-2 hover:bg-[#993a36] transition-all duration-300'><span>Logout</span><FaSignOutAlt/></button>
                        <img className='w-[40px] h-[40px] rounded-full border border-slate-300' src="" alt="" />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;