import React, { useContext, useEffect, useState } from 'react';
import UniqueTableRow from '../Utils/UniqueTableRow/UniqueTableRow';
import { authContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import useTitle from '../../Hooks/useTitle';


const notify = (string) => toast.success(string);
const notifyError = (error) => toast.error(error);
const MyToys = () => {
    const [toys, setToys] = useState([]);
    const { user } = useContext(authContext);
    useTitle('My Toys')
    useEffect(() => {
        fetch(`https://toy-town-server-mahdi105.vercel.app/toys?email=${user ? user.email : ''}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
                notify("Showing all my toys");
            })
            .catch(error => notifyError(error.message));
    }, [])

    // Delete a toy from database as well as from UI
    const handleDelete = (id) => {
        const proceed = confirm('Are you sure?');
        if (proceed) {
            fetch(`https://toy-town-server-mahdi105.vercel.app/toy/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        const remaining = toys.filter(toy => toy._id !== id);
                        setToys(remaining);
                        notify('One Toy is deleted')
                    }
                })
                .catch(error => notifyError(error.message));
        }
    }
    const handleItemsOrder = (order) => {
        fetch(`https://toy-town-server-mahdi105.vercel.app/toys?sortOrder=${order}&email=${user ? user.email : ''}`)
        .then(res => res.json())
        .then(data => {
            setToys(data);
            notify(`Sorted in ${order}`)
        })
        .catch(error => notifyError(error.message));
    }
    return (
        <section className='container mx-auto px-2 md:px-0 lg:px-10 py-10'>
            <div className='py-4'>
                <h2 className='py-2 text-[27px]' style={{ fontFamily: 'baloo paaji' }}>All My Toys</h2>
            </div>
            <div>
                <h2 className='mb-1'>Sort by price:</h2>
                <button onClick={()=> handleItemsOrder('asc')} className='py-2 px-3 bg-red-500 hover:bg-red-700 text-white mr-3'>Ascending</button>
                <button onClick={()=> handleItemsOrder('desc')} className='py-2 px-3 bg-red-500 hover:bg-red-700 text-white'>Discending</button>
            </div>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Toy</th>
                                <th>Additional Info</th>
                                <th>Category</th>
                                <th>Edit/Delete</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                toys.map(toy => <UniqueTableRow handleDelete={handleDelete} toy={toy} key={toy._id}></UniqueTableRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </section>
    );
};

export default MyToys;