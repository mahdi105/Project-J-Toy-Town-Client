import React, { useEffect, useState } from 'react';
import truck from '/images/truck.gif'

const Gallery = () => {
    const [gallery, setGallery] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/gallery')
        .then(res => res.json())
        .then(data => setGallery(data))
        .catch(error => console.log(error.message))
    },[])
    return (
        <section className='container mx-auto bg-[#f5f9f9] px-2 md:px-0 lg:px-10 py-16'>
            <h2 className='heading text-[36px] text-center'>Toys Gallery</h2>
            <div className="divider w-4/12 mx-auto mb-16">
                <img src={truck} className='w-[65px] h-[65px] rounded-full' alt="" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                {
                    gallery.length > 0 ? 
                    gallery.map(item => 
                    <div className='p-2 rounded-md shadow-sm bg-white' key={item._id}>
                        <img className='w-full h-full object-contain' src={item.image} alt="" />
                    </div>)
                    :
                    <button className="btn loading">loading</button>
                }
            </div>
        </section>
    );
};

export default Gallery;