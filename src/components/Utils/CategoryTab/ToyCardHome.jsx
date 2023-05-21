import React, { useContext } from 'react';
import { Rating } from '@smastrom/react-rating';
import { Link } from 'react-router-dom';
import { authContext } from '../../../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const notify = () => toast.error('You have to login first to view details')
const ToyCardHome = ({ toy }) => {
    const {user} = useContext(authContext);
    const { name, image, price, rating, _id } = toy;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img className='h-[200px] w-full object-contain p-3 bg-[#eff9fa]' src={image} />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-[15px] font-bold md:font-normal md:text-[22px]">{name}</h2>
                <p className='text-[13px] md:text-[16px]'>Price: ${price}</p>
                <div className='flex items-center gap-2 mb-3'>
                    <span className='text-[13px] md:text-[16px]'>Rating: {rating}</span>
                    <Rating
                        style={{ maxWidth: 120 }}
                        value={rating}
                        readOnly
                    />
                </div>
                <div className="card-actions justify-start">
                    <Link onClick={user || notify} to={`/toy/${_id}`}  className="py-2 px-4 rounded-full text-white bg-[#09CCD0] shadow-lg hover:bg-white border-2 transition-all duration-300 hover:border-[#09CCD0] hover:text-black text-[13px] md:text-[16px]">View details</Link>
                </div>
            </div>
        </div>
    );
};

export default ToyCardHome;