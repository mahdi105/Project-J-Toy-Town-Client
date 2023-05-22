import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';
import ThirdPartyLogin from './ThirdPartyLogin';
import { toast } from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';
import useTitle from '../../Hooks/useTitle';

const notifySucces = () => toast.success('Registration Successfull, please login');
const notifyWarning = (error) => toast.error(error.message)
const Register = () => {
    useTitle('Register')
    const { createUser, logOut, user } = useContext(authContext);
    const handleLogout = ()=>{
        logOut()
        .then(()=> {})
        .catch(error => notifyWarning(error))
    }
    // Add User Name and Photo URL while registration
    const handleUpdateProfile = (cUser, userName, photo )=>{
        updateProfile(cUser, {
            displayName: userName,
            photoURL: photo || null
        })
        .then(() =>{})
        .catch(error => notifyWarning(error));
    }
    const navigate = useNavigate();
    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photo.value;
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password)) {
            alert('Password must contain at least Uppercase letter, Lowercase letter, number, special character and minimum 6 characters');
            return;
        };
        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                notifySucces();
                handleLogout();
                handleUpdateProfile(user, name, photoUrl);
                navigate('/login');
            })
            .catch(error => notifyWarning(error))
    }
    return (
        <main>
            <div className="hero min-h-screen bg-base-200 py-24">
                <div className="hero-content flex justify-center items-center">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold">Register Now</h1>

                            {/* Registration Form */}
                            <form onSubmit={handleRegister} className='mb-3'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="John Doe" className="input input-bordered" required/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name='password' className="input input-bordered" required/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" placeholder="https://abc.png/jpg/webp" name='photo' className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">Sign Up</button>
                                </div>
                            </form>
                            <p>Already have an account? <Link className='text-[#FF6F69] font-bold' to='/login'>Login</Link></p>
                            <ThirdPartyLogin></ThirdPartyLogin>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Register;