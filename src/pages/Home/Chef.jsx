import React from 'react';
import { Button, Card } from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {
    const { id, chef_picture, chef_name, years_of_experience, num_recipes, likes } = chef;
    return (
        <>
            <Card style={{ width: 'full' }}>
                <LazyLoad height={620} width={420} threshold={0.95}>
                    <Card.Img variant="top" src={chef_picture} />
                </LazyLoad>
                {/* <Card.Img variant="top" src={chef_picture} /> */}
                <Card.Body>
                    <Card.Title>{chef_name}</Card.Title>
                    <Card.Text>
                        Experience in years: {years_of_experience}
                        <br />
                        Total recipes: {num_recipes}
                        <br />
                        Total likes: {likes}
                    </Card.Text>
                    <Link to={`/chef/${id}`}><Button variant="primary">View Recipe Details</Button></Link>
                </Card.Body>
            </Card>
        </>
    );
};

export default Chef;