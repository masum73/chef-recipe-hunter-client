import React from 'react';
import { Card } from 'react-bootstrap';

const TopChefCard = ({chef}) => {
    const { chef_picture, chef_name} = chef;
    return (
        <>
            <Card style={{ width: 'full' }}>
                <Card.Img variant="top" src={chef_picture} />
                <Card.Body>
                    <Card.Title>{chef_name}</Card.Title>
                </Card.Body>
            </Card>
        </>
    );
};

export default TopChefCard;