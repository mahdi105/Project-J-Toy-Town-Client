import { Rating } from '@smastrom/react-rating';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';

const ToyDetails = () => {
    const {user} = useContext(authContext);
    const toyDetails = useLoaderData();
    const { _id, category, description, image, name, price, rating, quantity, seller } = toyDetails;
    return (
        <section className='container mx-auto bg-white px-2 md:px-0 lg:px-10 py-16'>
            <div className='w-7/12 mx-auto shadow-lg p-5 rounded-lg'>
                {/* F1 */}
                <div className='flex justify-center gap-6 mb-5 rounded-md shadow-md p-5'>
                    <div >
                        <img src={image} alt="" />
                    </div>
                    <div>
                        <h2 className='font-bold text-[18px] mb-2'>{name}</h2>
                        <p className='text-[14px]'>{description}</p>
                    </div>
                </div>
                {/* F2 */}
                <div>
                    <div className='bg-gray-100 rounded-md p-3 mb-3'>
                        <h2 className='font-semibold text-[16px] mb-2'>Seller:</h2>
                        <div className='flex items-center gap-2 '>
                            <img className='w-[40px] h-[40px] bg-white rounded-full border border-[#09ccd0]' src={user !== null ? user.photoURL : ''} alt="" />
                            <div>
                                <h3 className='font-semibold text-[16px]'>{seller.name}</h3>
                                <p className='text-[14px] text-gray-500'>{seller.email}</p>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-md p-3'>
                        <h2 className='font-semibold text-[16px]'>More Info:</h2>
                        <div>
                            <div>
                                <h3>Category: {category}</h3>
                                <div className='text-[14px] text-gray-500 flex items-center gap-1'><p>Rating: {rating} </p><Rating
                                    style={{ maxWidth: 80 }}
                                    value={rating}
                                    readOnly
                                /></div>
                                <p className='text-[14px] text-gray-500 mb-2'>Price: ${price}</p>
                                <p className='text-[14px] text-gray-500 mb-2'>Quantity: {quantity}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ToyDetails;