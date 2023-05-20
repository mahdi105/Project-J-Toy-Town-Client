import React from 'react';
import { Rating } from '@smastrom/react-rating';

const ToyCardHome = ({ toy }) => {
    const { name, image, price, rating, _id } = toy;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img className='h-[200px] w-full object-contain p-3 bg-[#eff9fa]' src={image} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: ${price}</p>
                <div className='flex items-center gap-2 mb-3'>
                    <span>Rating: {rating}</span>
                    <Rating
                        style={{ maxWidth: 120 }}
                        value={rating}
                        readOnly
                    />
                </div>
                <div className="card-actions justify-start">
                    <button className="btn bg-[#EA1662] border-none shadow-lg">View details</button>
                </div>
            </div>
        </div>
    );
};

export default ToyCardHome;