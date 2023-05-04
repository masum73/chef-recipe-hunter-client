import React from 'react';
import RecipeCard from './RecipeCard';

const TopRecipes = ({ topRecipes }) => {

    return (
        <div>
            <h2 className='text-center mt-3'>Top Recipes</h2>
            <div className='row row-cols-1 row-cols-lg-3 g-2 gy-3 g-lg-3'>
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