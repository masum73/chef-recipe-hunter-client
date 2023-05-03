import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const SingleChef = () => {
    const sChef = useLoaderData();
    console.log(sChef);
    const { chef_picture, chef_name, years_of_experience, num_recipes, likes, description } = sChef;

    return (
        <Container className='d-flex justify-content-evenly align-items-top mt-3'>
            {/* <div >
                <img src={chef_picture} alt="" />
            </div>
            <div>
                <h2>{chef_name}</h2>
                <br />
                <h4>Experience in years: {years_of_experience}</h4>
                <br />
                <h4>Total recipes: {num_recipes}</h4>
                <br />
                <h4>Total likes: {likes}</h4>
                <br />
                <p>{description}</p>
            </div>
            <div>
                <h2>Hello</h2>
            </div> */}
            <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src={chef_picture} />
                <Card.Body>
                    <Card.Title>{chef_name}</Card.Title>
                    <Card.Text>
                        
                        {description}
                        <br /> <br />
                        Experience in years: {years_of_experience}
                        <br />
                        Total recipes: {num_recipes}
                        <br />
                        Total likes: {likes}
                        <br />
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            <div>
                <h3>Hello</h3>
            </div>

        </Container>
    );
};

export default SingleChef;