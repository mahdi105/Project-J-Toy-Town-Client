import React from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const notify = (string) => toast.success(string);
const notifyError = (error) => toast.error(error);

const UpdateToy = () => {
    const navigate = useNavigate();
    const loadedToy = useLoaderData();
    const {_id, price, quantity, description} = loadedToy;
    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.qty.value;
        const desc = form.description.value;
        const updated = {price, quantity, description: desc};
        fetch(`http://localhost:5000/toy/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updated)
        })
        .then(res => res.json())
        .then(data => {
            notify('Update Successful');
            navigate('/myToys')
        })
        .catch(error => notifyError(error.message))
    }
    return (
        <section className='container mx-auto px-2 md:px-0 lg:px-10 py-10'>
            <div className='py-4'>
                <h2 className='py-2 text-[27px]' style={{ fontFamily: 'baloo paaji' }}>Updata Toy Information</h2>
            </div>
            <div>
                <div className="hero min-h-screen bg-base-200 py-8">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <form onSubmit={handleUpdate}>
                                    {/* Description */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Description</span>
                                        </label>
                                        <textarea className='border-2 border-[#FF6F69] focus:outline-none rounded-lg p-4' name="description" id="" cols="20" rows="10" defaultValue={description} required></textarea>
                                    </div>
                                    {/* Price */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price:</span>
                                        </label>
                                        <input type="number" name='price' placeholder="$00.00" className="input input-bordered" defaultValue={price} required/>
                                    </div>
                                    {/* Price */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Quantity:</span>
                                        </label>
                                        <input type="number" name='qty' placeholder="1000~" className="input input-bordered" defaultValue={quantity} required/>
                                    </div>
                                    {/* Submit */}
                                    <div className="form-control mt-6">
                                        <button type='submit' className="btn btn-primary">Update</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    );
};

export default UpdateToy;