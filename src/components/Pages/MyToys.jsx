import React from 'react';

const MyToys = () => {
    return (
        <section className='container mx-auto px-2 md:px-0 lg:px-10'>
            <div className='py-6'>
                <h2 className='py-4 text-[27px]' style={{ fontFamily: 'baloo paaji' }}>All Toys</h2>
            </div>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Toy</th>
                                <th>Price</th>
                                <th>Details</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                toys.map(toy => <AllTableRow toy={toy} key={toy._id}></AllTableRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </section>
    );
};

export default MyToys;