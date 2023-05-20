import React from 'react';

const ToyCardHome = ({toy}) => {
    return (
        <div>
            <h1>Toy Name: {toy.name}</h1>
        </div>
    );
};

export default ToyCardHome;