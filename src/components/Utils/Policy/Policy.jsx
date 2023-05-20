import React from 'react';
import dollar from '/images/dollar.avif';
import duration from '/images/duration.avif';
import back from '/images/return.webp';
import van from '/images/van.webp';
import truck from "/images/truck.gif"

const Policy = () => {
    return (
        <section className='container mx-auto bg-white px-2 md:px-0 lg:px-10 py-16'>
            <h2 className='heading text-[36px] text-center mb-1'>Our Business Policy</h2>
            <div className="divider w-4/12 mx-auto mb-16">
                <img src={truck} className='w-[65px] h-[65px] rounded-full' alt="" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-10'>
                <div>
                    <div className='flex justify-center mb-2'>
                        <img src={van} alt="" />
                    </div>
                    <h2 className='font-bold text-center mb-1'>Free Shipping</h2>
                    <p className='text-center'>On Order $23 - 7 Days A Week</p>
                </div>
                <div>
                    <div className='flex justify-center mb-2'>
                        <img src={back} alt="" />
                    </div>
                    <h2 className='font-bold text-center mb-1'>Free Return</h2>
                    <p className='text-center'>Free 90 days returns policy</p>
                </div>
                <div>
                    <div className='flex justify-center mb-2'>
                        <img src={dollar} alt="" />
                    </div>
                    <h2 className='font-bold text-center mb-1'>Money Back Guarantee</h2>
                    <p className='text-center'>Send Within 30 days</p>
                </div>
                <div>
                    <div className='flex justify-center mb-2'>
                        <img src={duration} alt="" />
                    </div>
                    <h2 className='font-bold text-center mb-1'>24/7 Customer Service</h2>
                    <p className='text-center'>Call us 24/7 at 000 -123 - 455</p>
                </div>
            </div>
        </section>
    );
};

export default Policy;