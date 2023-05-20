import React from 'react';
import message from '/images/message.gif'
import hero from '/images/hello.jpg'

const Newsletter = () => {
    return (
        <section className='container mx-auto bg-white px-2 md:px-0 lg:px-10 py-16 md:grid md:grid-cols-12 gap-10'>
            <div className='flex items-start justify-center md:justify-end p-3 col-span-5'>
                <img className='w-3/6 md:w-full md:h-[200px]' src={hero} alt="" />
            </div>
            <div className='col-span-7'>
                <div className="divider w-[150px] mx-auto mb-6">
                    <img src={message} className='w-[40px] h-[45px] rounded-full' alt="" />
                </div>
                <h2 className='heading text-[36px] leading-[30px] text-center mb-2 tracking-widest'>Newsletter</h2>
                <p className='text-center mb-6 text-[14px] text-gray-400'>Subscribe Now For Exclusive Offers</p>
                <div className='flex justify-center items-center'>
                    <input className='w-[300px] border border-gray-300 py-2 px-3 rounded-l-md focus:outline-none' type="email" name="" id="" placeholder='Your Email' />
                    <button className='py-2 px-3 rounded-r-md bg-[#09ccd0] border border-[#09ccd0] uppercase text-white font-semibold hover:bg-[#fc6762] hover:border-[#fc6762] transition-all duration-300'>
                        Subscribe
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;