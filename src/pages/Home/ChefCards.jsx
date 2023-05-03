import React from 'react';
import Chef from './Chef';

const ChefCards = ({ allChefs }) => {

    return (
        <div className=''>

            <h2 className='text-center mt-3'>All Chefs</h2>
            <div className='row row-cols-2 row-cols-lg-3 g-2 g-lg-3'>
                {
                    allChefs.map(chef => <div className='col'>
                        <Chef
                            key={chef.id}
                            chef={chef}
                        ></Chef>
                    </div> )
                }
            </div>

        </div>
    );
};

export default ChefCards;