import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const toyDetails = useLoaderData();
    console.log(toyDetails);
    return (
        <div>
            
        </div>
    );
};

export default ToyDetails;