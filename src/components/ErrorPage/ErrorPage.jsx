import React, { forwardRef, useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import errorImage from '../../assets/error.json';
import { Link, useRouteError } from 'react-router-dom';

const LottieAnimation = forwardRef((props, ref) => {
    const animationRef = useRef(null);

    useEffect(() => {
        if (animationRef.current) {
            animationRef.current.play();
        }
    }, []);

    return (
        <Lottie
            animationData={errorImage}
            loop
            autoplay
            style={{ width: 450, height: 450 }}
            lottieRef={ref || animationRef}
        />
    );
});
const ErrorPage = () => {
    const animationRef = useRef(null);
    const routerError = useRouteError();
    const {status, statusText} = routerError;

    return (
      <section>
        <div className='flex items-center justify-center pt-10 pb-5'>
            <LottieAnimation ref={animationRef} />
        </div>
        <div className='text-center pb-5'>
            <Link className='py-2 px-6 bg-[#fd766f] text-white' to='/'>Back to home</Link>
        </div>
      </section>
    );
};

export default ErrorPage;