import React from 'react';
import TopChefCard from './TopChefCard';

const TopChef = ({topChefs}) => {
    
    return (
        <>
            <h2 className='text-center mt-3'>Top Chefs</h2>
            <div className='row row-cols-1 row-cols-lg-3 g-2 gy-3 g-lg-3'>
                {
                    topChefs.map(chef => <div key={chef.id} className='col'>
                        <TopChefCard
                            chef={chef}
                        ></TopChefCard>
                    </div> )
                }
            </div>
        </>
    );
};

export default TopChef;