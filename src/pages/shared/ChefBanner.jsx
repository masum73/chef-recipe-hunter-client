import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefBanner = () => {
    //const chefData = useLoaderData();
    const { id } = useParams();
    //console.log(chefData);

    const [chef, setChef] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/chef/${id}`)
            .then((res) => res.json())
            .then((data) => setChef(data))
            .catch((error) => console.error(error));
    }, [id]);

    
    
    console.log(chef);

    
    return (
        <div className='text-center mt-5'>
            <h2>Chef Banner</h2>
            <img src={chef.chef_picture} alt="" />
        </div>
    );
};

export default ChefBanner;