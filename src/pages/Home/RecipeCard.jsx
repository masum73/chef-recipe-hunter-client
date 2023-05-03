import React from 'react';
import { Card } from 'react-bootstrap';

const RecipeCard = ({recipe}) => {
    const {recipe_pic, recipe_name} = recipe;
    return (
        <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src={recipe_pic} />
                <Card.Body>
                    <Card.Title>{recipe_name}</Card.Title>
                </Card.Body>
            </Card>
    );
};

export default RecipeCard;