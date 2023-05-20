import React from 'react';
import Slider from '../Utils/Slider/Slider';
import CategoryTab from '../Utils/CategoryTab/CategoryTab';
import Gallery from '../Utils/Gallery/Gallery';
import Policy from '../Utils/Policy/Policy';
import Newsletter from '../Utils/Newsletter/Newsletter';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <CategoryTab></CategoryTab>
            <Gallery></Gallery>
            <Policy></Policy>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;