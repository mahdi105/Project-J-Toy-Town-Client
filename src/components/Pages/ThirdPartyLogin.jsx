import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import google from '/google.png'

const notifySucces = () => toast.success('Login with google successful');
const notifyError = (error) => toast.error(error.message);
const ThirdPartyLogin = () => {
    const {googleSignIn} = useContext(authContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const handleGoogleLogin = () => {
        console.log("google signin");
        googleSignIn()
        .then(result => {
            notifySucces();
            navigate(from, {replace:true})
        })
        .catch(error => notifyError(error))
    }
    return (
        <div className="flex flex-col w-full border-opacity-50">
            <div className="divider">OR</div>
            <div className='flex justify-center'>
                <button className='flex items-center justify-center gap-1 py-1 px-3 rounded-md border hover:border-[#FB8984]' onClick={handleGoogleLogin}>
                    <img className='w-[25px] h-[25px]' src={google} alt="" />
                    <span>Gmail</span>
                </button>
            </div>
        </div>
    );
};

export default ThirdPartyLogin;