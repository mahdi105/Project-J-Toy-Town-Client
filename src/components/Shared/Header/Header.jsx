import React, { useContext } from 'react';
import { FaAngleDown, FaHeart, FaSearch, FaSignOutAlt } from "react-icons/fa";
import './Header.css'
import logo from '/logo.png'
import menicon from '/images/men-icon.webp'
import caricon from '/images/caricon.webp'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { authContext } from '../../../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const notify = () => toast('You already logged out');
const Header = () => {
    const { logOut, user } = useContext(authContext);
    const navigate = useNavigate();
    const handleLogOut = () => {
        if (user) {
            const proceed = confirm("Are you sure?");
            if (proceed) {
                logOut()
                    .then(() => { navigate('/') })
                    .catch(error => alert(error.message))
            }
        }else{
            notify();
        }
    }
    return (
        <header >
            <section className='topbar relative bg-[#222222] py-4'>
                <div className='container mx-auto px-2 md:px-0 lg:px-10 flex items-center md:justify-between justify-center'>
                    {/* Search field */}
                    <div className='md:flex items-center gap-2 hidden'>
                        <input className='bg-transparent border-b border-slate-100 w-[200px] focus:border-b focus:border-slate-100 focus:outline-none caret-slate-100' type="search" name="search" id="" placeholder='Search' />
                        <FaSearch className='text-white'></FaSearch>
                    </div>
                    {/* Meta Fields */}
                    <div className='flex items-center gap-2 md:gap-3'>
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
                        <div className='text-slate-100 md:flex items-center gap-2 hidden'>
                            <span>Language</span>
                            <FaAngleDown></FaAngleDown>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container mx-auto px-2 md:px-0 lg:px-10 py-6 flex items-center md:justify-between justify-center'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className='md:flex items-center gap-10 hidden'>
                    <div className='flex items-center justify-center gap-2'>
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
            <section className='bg-[#09CCD0]'>
                <div className="navbar md:justify-between container mx-auto px-2 md:px-0 lg:px-10">
                    {/* logo */}
                    <div className="navbar-start md:hidden">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            {/* Drop Down menu*/}
                            <ul tabIndex={0} className="menu drop-menu menu-compact dropdown-content mt-3 shadow bg-base-100 rounded-box w-52 py-2 px-3">
                                <NavLink to="/" className={`${({ isActive }) => isActive ? "active" : ""}`}>Home</NavLink>
                                <NavLink to="/allToys" className={`${({ isActive }) => isActive ? "active" : ""}`}>All Toys</NavLink>
                                <NavLink to="/myToys" className={`${({ isActive }) => isActive ? "active" : ""}`}>My Toys</NavLink>
                                <NavLink to="/addAtoy" className={`${({ isActive }) => isActive ? "active" : ""}`}>Add a toy</NavLink>
                                <NavLink to="/blog" className={`${({ isActive }) => isActive ? "active" : ""}`}>Blogs</NavLink>
                                <NavLink to="/login" className={`${({ isActive }) => isActive ? "active" : ""}`}>Login</NavLink>
                                <NavLink to="/register" className={`${({ isActive }) => isActive ? "active" : ""}`}>Register</NavLink>
                                {/* Logout Button */}
                                <button className='md:hidden mt-3 bg-[#FF6F69] rounded-full py-1 px-4 text-white font-light flex items-center justify-center gap-2 hover:bg-[#993a36] transition-all duration-300'><span>Logout</span><FaSignOutAlt /></button>
                            </ul>
                        </div>
                        <Link to='/' className="logo-text btn btn-ghost normal-case text-xl">Toy Town</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex ">
                        <nav className="menu menu-horizontal px-1 flex gap-4 text-white">
                            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                            <NavLink to="/allToys" className={({ isActive }) => isActive ? "active" : ""}>All Toys</NavLink>
                            <NavLink to="/myToys" className={({ isActive }) => isActive ? "active" : ""}>My Toys</NavLink>
                            <NavLink to="/addAtoy" className={({ isActive }) => isActive ? "active" : ""}>Add a toy</NavLink>
                            <NavLink to="/blog" className={({ isActive }) => isActive ? "active" : ""}>Blogs</NavLink>
                            <NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""}>Login</NavLink>
                            <NavLink to="/register" className={({ isActive }) => isActive ? "active" : ""}>Register</NavLink>
                        </nav>
                    </div>
                    <div className="navbar-end flex items-center gap-x-3">
                        <button onClick={handleLogOut} className='hidden bg-[#FF6F69] rounded-full py-1 px-6 text-white font-light md:flex items-center gap-2 hover:bg-[#993a36] transition-all duration-300'><span>Logout</span><FaSignOutAlt /></button>
                        <img title={user !== null && user && user.displayName} className='w-[40px] h-[40px] rounded-full border border-slate-300' src={user !== null && user && user.photoURL} alt="M" />
                    </div>
                </div>
            </section>
        </header>
    );
};

export default Header;