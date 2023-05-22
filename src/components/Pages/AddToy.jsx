import React, { useContext } from 'react';
import { authContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import useTitle from '../../Hooks/useTitle';

const notify = (string) => toast.success(string);
const notifyError = (error) => toast.error(error);

const AddToy = () => {
    const { user } = useContext(authContext);
    useTitle('Add a toy')
    const handlePost = (event) => {
        event.preventDefault();
        const form = event.target;
        const sellerMail = form.email.value;
        const seller = form.seller.value;
        const name = form.name.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.desc.value;
        const quantity = form.qty.value;
        const photo = form.photo.value;
        const newToy = {
            sellerMail,
            seller,
            toyName: name,
            category,
            price,
            rating,
            description,
            quantity,
            photo,
        }

        fetch('http://localhost:5000/toys', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newToy)
        })
        .then(res => res.json())
        .then(data => {
            form.reset();
            notify("Posted Successfully");
        })
        .catch(error => notifyError(error.message))
    }
    return (
        <section className='container mx-auto px-2 md:px-0 lg:px-10 py-10'>
            <div className='py-4'>
                <h2 className='py-2 text-[27px] text-center' style={{ fontFamily: 'baloo paaji' }}>Add A Toy</h2>
            </div>
            <div className="hero min-h-screen py-2">
                <div className="hero-content">
                    <div className="card flex-shrink-0 w-[600px] shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handlePost}>
                                <div className='grid grid-cols-2 gap-4'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name='email' placeholder="email" className="input input-bordered" defaultValue={user ? user.email : ''} required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Seller Name</span>
                                        </label>
                                        <input type="text" name='seller' placeholder="Seller Name" className="input input-bordered" defaultValue={user ? user.displayName : ''} required />
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-4'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo URL</span>
                                        </label>
                                        <input type="text" name='photo' className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Category</span>
                                        </label>
                                        <input type="text" name='category' className="input input-bordered" required />
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-4'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Toy Name</span>
                                        </label>
                                        <input type="text" name='name' placeholder="Toy Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Quantity</span>
                                        </label>
                                        <input type='text' name='qty' className="input input-bordered" required />
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-4'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type='text' name='price' className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Rating</span>
                                        </label>
                                        <input type='text' name='rating' className="input input-bordered" required />
                                    </div>
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <textarea className='w-full border-2 border-[#ffd6d4] rounded-lg p-3 focus:outline-none' name="desc" id="" cols="40" rows="10" placeholder='Give the description about the toy'></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">POST</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddToy;