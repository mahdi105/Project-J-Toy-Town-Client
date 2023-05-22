import React from 'react';
import { toast } from 'react-hot-toast';
import { HiOutlineTrash, HiPencilSquare } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const notify = (string) => toast.success('string');
const notifyError = (error) => toast.error(error);

const UniqueTableRow = ({ toy, handleDelete}) => {
    const { _id, image, name, price, category, seller, quantity, rating, description } = toy;
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-24 h-24">
                            <img className='object-contain w-full h-full' src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <h2 className="font-bold">{name}</h2>
                        <p className="text-sm opacity-50">Seller: {seller.name}</p>
                        <p className="text-sm opacity-50">Seller Email: {seller.email}</p>
                    </div>
                </div>
            </td>
            <td>
                <p><strong>Desc:</strong> {description.slice(0, 30)}...</p>
                <p><strong>Rating:</strong> {rating}</p>
                <p><strong>Quantity:</strong> {quantity}</p>
                <p><strong>Price: </strong><span className='text-rose-500'>${price}</span></p>
            </td>
            <td><p className='font-bold'>{category}</p></td>
            <th>
                <div className='flex items-center justify-center gap-3 py-2 px-4 rounded-lg shadow-md'>
                    <Link to={`/updateToy/${_id}`} className='hover:text-[#FE756F] transition-all duration-300 text-[25px]'>
                        <HiPencilSquare></HiPencilSquare>
                    </Link>
                    <button onClick={()=> handleDelete(_id)} className='hover:text-[#FE756F] transition-all duration-300 text-[25px]'>
                        <HiOutlineTrash></HiOutlineTrash>
                    </button>
                </div>
            </th>
            <th>
                <Link to={`/toy/${_id}`} className="btn btn-primary btn-xs">Details</Link>
            </th>
        </tr>
    );
};

export default UniqueTableRow;