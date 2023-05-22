import React from 'react';
import { Link } from 'react-router-dom';

const AllTableRow = ({toy}) => {
    const {_id, image, name, category, seller, price, quantity} = toy;
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-16 h-16">
                            <img className='object-contain w-full h-full' src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <h2 className="font-bold">{name}</h2>
                        <p className="text-sm opacity-50">Seller: {seller.name}</p>
                    </div>
                </div>
            </td>
            <td>
                <p>{category}</p>
            </td>
            <td><p>${price}</p></td>
            <th>
                <Link to={`/toy/${_id}`} className="btn btn-primary btn-xs">details</Link>
            </th>
        </tr>
    );
};

export default AllTableRow;