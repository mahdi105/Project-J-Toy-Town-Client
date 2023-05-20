import React from 'react';
import Slider from '../Utils/Slider/Slider';
import CategoryTab from '../Utils/CategoryTab/CategoryTab';
import Gallery from '../Utils/Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <CategoryTab></CategoryTab>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;