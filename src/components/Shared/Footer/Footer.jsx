import React from 'react';
import './Footer.css'
import { FaEnvelope, FaFacebookF, FaGoogle, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaPinterestP } from 'react-icons/fa';
import logo from '/logo.png'

const Footer = () => {
    return (
        <footer className='relative bg-[#E9F6F8]'>
            <div className='container mx-auto px-2 md:px-0 lg:px-10'>
                <section className='grid grid-cols-1 md:grid-cols-4 gap-6 pt-[60px] pb-[40px]'>
                    <div className='flex items-center flex-col'>
                        <img className='mb-3' src={logo} alt="" />
                        <div>
                            <h2 className="text-2xl text-center toy-town">Toy Town</h2>
                            <p className='text-[14px] text-justify text-slate-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                    </div>
                    <div>
                        <h2 className='footer-items-heading'>Your Account</h2>
                        <ul className='flex flex-col gap-4'>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>FAQ's</li>
                            <li>New Products</li>
                            <li>Best Sales</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='footer-items-heading'>Product</h2>
                        <ul className='flex flex-col gap-4'>
                            <li>Delivery</li>
                            <li>Legal notice</li>
                            <li>Price Drop</li>
                            <li>New Arrival</li>
                            <li>Trending</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='footer-items-heading'>Contact Info</h2>
                        <div>
                            <div className='flex items-center gap-2 mb-3'>
                                <FaMapMarkerAlt></FaMapMarkerAlt>
                                <span>4005, Silver business point India
                                </span>
                            </div>
                            <div className='flex items-center gap-2 mb-3'>
                                <FaPhoneAlt></FaPhoneAlt>
                                <span>+1123 456 789</span>
                            </div>
                            <div className='flex items-center gap-2 mb-8'>
                                <FaEnvelope></FaEnvelope>
                                <span>you123@toytown.com</span>
                            </div>
                            <div className='flex items-center justify-center gap-1 border border-slate-400 py-2 px-2 rounded-full'>
                                <span className='flex items-center justify-center w-[40px] h-[40px] rounded-full border border-slate-500 hover:text-white hover:bg-[#FF6F69] transition-all duration-300'>
                                    <FaFacebookF/>
                                </span>
                                <span className='flex items-center justify-center w-[40px] h-[40px] rounded-full border border-slate-500 hover:text-white hover:bg-[#FF6F69] transition-all duration-300'>
                                    <FaLinkedinIn/>
                                </span>
                                <span className='flex items-center justify-center w-[40px] h-[40px] rounded-full border border-slate-500 hover:text-white hover:bg-[#FF6F69] transition-all duration-300'>
                                    <FaGoogle/>
                                </span>
                                <span className='flex items-center justify-center w-[40px] h-[40px] rounded-full border border-slate-500 hover:text-white hover:bg-[#FF6F69] transition-all duration-300'>
                                    <FaPinterestP/>
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='copyright py-4 text-center'>
                    <span>&copy; 2023 All right reserved. Toy Town</span>
                </section>
            </div>
        </footer>
    );
};

export default Footer;