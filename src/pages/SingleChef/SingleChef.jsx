import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import SingleChefRecipes from './SingleChefRecipes';
import LazyLoad from 'react-lazy-load';

const SingleChef = () => {
    const sChef = useLoaderData();
    console.log(sChef);
    const { chef_picture, chef_name, years_of_experience, num_recipes, likes, description, recipes } = sChef;

    return (
        <Container className='d-flex justify-content-between align-items-top mt-3'>
            <Card style={{ width: '30rem', maxHeight: '55rem' }}>
                {/* <LazyLoad>
                    <Card.Img variant="top" src={chef_picture} />
                </LazyLoad> */}
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
            <div className='row row-cols-1 row-cols-lg-2 g-2 g-lg-5 ms-5'>
                {
                    recipes.map(recipe => <div key={recipe.id} className='col'>
                        <SingleChefRecipes recipe={recipe}
                        >
                        </SingleChefRecipes>
                    </div>)
                }
            </div>

        </Container>
    );
};

export default SingleChef;