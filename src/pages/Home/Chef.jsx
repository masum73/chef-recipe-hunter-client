import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Chef = ({ chef }) => {
    const { chef_picture, chef_name, years_of_experience, num_recipes, likes } = chef;
    return (
        <>
            <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src={chef_picture} />
                <Card.Body>
                    <Card.Title>{chef_name}</Card.Title>
                    <Card.Text>
                        Experience in years: {years_of_experience}
                        <br />
                        Total recipes: {num_recipes}
                        <br />
                        Total likes: {likes}
                    </Card.Text>
                    <Button variant="primary">View Recipe Details</Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default Chef;