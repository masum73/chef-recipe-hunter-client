import React from 'react';
import ChiefCards from './ChefCards';
import TopRecipes from './TopRecipes';
import RecentRecipes from './RecentRecipes';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Main = () => {
    const allData = useLoaderData();

    return (
        <Container>
            <ChiefCards allChefs={allData} ></ChiefCards>
            <TopRecipes></TopRecipes>
            <RecentRecipes></RecentRecipes>
        </Container>
    );
};

export default Main;