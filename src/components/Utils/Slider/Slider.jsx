import React from 'react';
// import Swiper core and required modules
import { Navigation, Autoplay, A11y } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import './Slider.css'
import classic from '/images/classic.png'
import sedan from '/images/sedan.png'
import sports from '/images/sports.png'


const Slider = () => {
    return (
        <Swiper
            effect="fade"
            modules={[Navigation, A11y, Autoplay]}
            navigation
            autoplay
            spaceBetween={50}
            slidesPerView={1}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <div className='bg-[#e9f6f8]'>
                    <div className="md:flex items-center justify-between swiper-slide-content container mx-auto px-2 md:px-0 lg:px-20 py-16">
                        <div>
                            <img src={classic} className='w-[200px] md:w-[450px] mx-auto mb-2 md:mb-0' alt="" />
                        </div>
                        <div className="slide-content px-10">
                            <p className='tagline text-[18px] md:text-[36px] text-[#FF6F69] mb-[.5rem]'>Hot & Trendy</p>
                            <h2 className='heading text-[24px] md:text-[62px] leading-[30px] md:leading-[70px] font-[600] mb-4'>Most Amazing Classic Toys</h2>
                            <p className='discount capitalize text-[15px] text-[#666666] mb-[1.8rem]'>Get upto 30% off on your first order</p>
                            <button className='uppercase text-white border border-transparent hover:text-black hover:bg-white hover:border-[#09CCD0] py-2 px-4 rounded-full bg-[#09CCD0] transition-all duration-300'>Shop Now</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='bg-[#e9f6f8]'>
                    <div className="md:flex items-center justify-between swiper-slide-content container mx-auto px-2 md:px-0 lg:px-20 py-16">
                        <div>
                            <img src={sedan} className='w-[200px] md:w-[450px] mx-auto mb-2 md:mb-0' alt="" />
                        </div>
                        <div className="slide-content px-10">
                            <p className='tagline text-[18px] md:text-[36px] text-[#FF6F69] mb-[.5rem]'>Hot & Trendy</p>
                            <h2 className='heading text-[24px] md:text-[62px] leading-[30px] md:leading-[70px] font-[600] mb-4'>Most Amazing Sedan Car Toys</h2>
                            <p className='discount capitalize text-[15px] text-[#666666] mb-[1.8rem]'>Get upto 30% off on your first order</p>
                            <button className='uppercase text-white border border-transparent hover:text-black hover:bg-white hover:border-[#09CCD0] py-2 px-4 rounded-full bg-[#09CCD0] transition-all duration-300'>Shop Now</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>

                <div className='bg-[#e9f6f8]'>
                    <div className="md:flex items-center justify-between swiper-slide-content container mx-auto px-2 md:px-0 lg:px-20 py-16">
                        <div>
                            <img src={sports} className='w-[200px] md:w-[450px] mx-auto mb-2 md:mb-0' alt="" />
                        </div>
                        <div className="slide-content px-10">
                            <p className='tagline text-[18px] md:text-[36px] text-[#FF6F69] mb-[.5rem]'>Hot & Trendy</p>
                            <h2 className='heading text-[24px] md:text-[62px] leading-[30px] md:leading-[70px] font-[600] mb-4'>Most Amazing Sports Car Toys</h2>
                            <p className='discount capitalize text-[15px] text-[#666666] mb-[1.8rem]'>Get upto 30% off on your first order</p>
                            <button className='uppercase text-white border border-transparent hover:text-black hover:bg-white hover:border-[#09CCD0] py-2 px-4 rounded-full bg-[#09CCD0] transition-all duration-300'>Shop Now</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;