import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaSearch } from "react-icons/fa";
import AllTableRow from '../Utils/AllTableRow/AllTableRow';
import useTitle from '../../Hooks/useTitle';

const notifyError = (error) => toast.error(error.message);
const notify = (string) => toast.success(string)
const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [enable, setEnable] = useState(true);
    const [limit, setLimit] = useState(20);
    useTitle('All Toys')
    const handleSearch = (event) => {
        event.preventDefault();
        const form = event.target;
        const searchString = form.search.value;
        fetch(`http://localhost:5000/toys?name=${searchString}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
                notify('Showing the search result soon');
            })
            .catch(error => notifyError(error));
    }
    useEffect(() => {
        fetch(`http://localhost:5000/toys?limit=${limit}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
                notify("Showing all toys");
            })
            .catch(error => notifyError(error))
    }, [limit])
    const handleDisplayToys = () => {
        setLimit();
        notify("Showing all toys");
        setEnable(false);
    }
    console.log(toys);
    return (
        <section className='container mx-auto px-2 md:px-0 lg:px-10'>
            <div className='py-6 grid grid-cols-12 gap-10'>
                <form className='col-span-5' onSubmit={handleSearch}>
                    <div className='flex items-center gap-3'>
                        <input className='border-b border-[#FF6F69] py-2 px-3 focus:outline-none' type="text" name="search" id="" placeholder='Search by toy name' required />
                        <button className=' p-2 bg-[#FF6F69] hover:bg-white hover:border-2 hover:border-[#FF6F69] hover:text-[#FF6F69] text-white rounded transition-all duration-300' type='submit'><FaSearch /></button>
                    </div>
                </form>
                <div className='col-span-7'>
                    <h2 className='py-4 text-[27px]' style={{ fontFamily: 'baloo paaji' }}>All Toys</h2>
                </div>
            </div>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Toy</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                toys.map(toy => <AllTableRow toy={toy} key={toy._id}></AllTableRow>)
                            }
                        </tbody>
                    </table>
                    <div className={`${enable ? 'flex items-center justify-center py-3' : 'hidden'}`}>
                        <button className='py-1 px-3 hover:bg-[#ce342f] rounded bg-[#fc5c56] text-white ' onClick={handleDisplayToys}>Load All</button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default AllToys;