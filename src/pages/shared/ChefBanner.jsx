import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefBanner = () => {
    const chefData = useLoaderData();
    console.log(chefData);
    return (
        <div className='text-center mt-5'>
            <h2>Chef Banner</h2>
        </div>
    );
};

export default ChefBanner;