import React from 'react';
import RecipeCard from './RecipeCard';

const TopRecipes = ({ topRecipes }) => {

    return (
        <div>
            <h2 className='text-center mt-3'>Top Recipes</h2>
            <div className='row row-cols-2 row-cols-lg-3 g-2 g-lg-1'>
                {
                    topRecipes.map(recipe => <div key={recipe.id} className='col'>
                        <RecipeCard
                            recipe={recipe}
                        ></RecipeCard>
                    </div>)
                }
            </div>

        </div>
    );
};

export default TopRecipes;