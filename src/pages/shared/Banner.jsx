import React from 'react';
import { Carousel } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const Banner = () => {
    const location = useLocation();
    let showCarousel = true;
    console.log(location);

    if (location.pathname === '/') {
        showCarousel = true;
    } else {
        showCarousel = false;
    }

    return (
        <>
            {
                showCarousel ? <Carousel>
                    <Carousel.Item>
                        <img style={{ objectFit: 'cover', width: '100vw', height: '80vh' }}
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Many Recipes at One Plane</h3>
                            <p>We have tons of recipes that are available.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{ objectFit: 'cover', width: '100vw', height: '80vh' }}
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Top Recipes Everyday</h3>
                            <p>We have top recipes based on user likes.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{ objectFit: 'cover', width: '100vw', height: '80vh' }}
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>World's Best Chefs</h3>
                            <p>
                                We have Top quality chefs who provided delicious recipes.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                    : null
            }

        </>
    );
};

export default Banner;