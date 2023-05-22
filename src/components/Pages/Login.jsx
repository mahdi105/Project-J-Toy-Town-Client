import React, { useContext } from 'react';
import { authContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ThirdPartyLogin from './ThirdPartyLogin';

const notifySucces = () => toast.success('Login Successful');
const notifyError = (error) => toast.error(error.message);
const Login = () => {
    const {logIn} = useContext(authContext);
    const location = useLocation();
    const destination = location.state?.from?.pathname || '/';
    const navigate = useNavigate();
    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // Login
        logIn(email, password)
            .then(result => {
                form.reset();
                notifySucces();
                navigate(destination, {replace:true});
            })
            .catch(error => notifyError(error))
    }
    return (
        <main>
            <div className="hero min-h-screen bg-base-200 py-24">
                <div className="hero-content flex justify-center items-center">
                    <div className="card flex-shrink-0 w-[450px] shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold">Login Now</h1>

                            {/* Registration Form */}
                            <form onSubmit={handleLogin} className='mb-3'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">Sign In</button>
                                </div>
                            </form>
                            <p>Not a member yet? <Link className='text-[#FF6F69] font-bold' to='/Register'>Please Register</Link></p>
                            <ThirdPartyLogin></ThirdPartyLogin>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;