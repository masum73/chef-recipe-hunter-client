import React from 'react';
import { Button, Card } from 'react-bootstrap';

const SingleChefRecipes = ({ recipe }) => {
    const { recipe_name,cooking_method, rating  } = recipe;
    //console.log(recipes);
    return (
        <Card style={{ width: '25rem' }}>
            <Card.Body>
                <Card.Title>{recipe_name}</Card.Title>
                <Card.Text>
                    Cooking Method: {cooking_method}
                    Rating: {rating}
                </Card.Text>
                <Button>Add to Favorite</Button>
            </Card.Body>
        </Card>
    );
};

export default SingleChefRecipes;