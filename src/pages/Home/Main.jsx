import React from 'react';
import ChiefCards from './ChiefCards';
import TopRecipes from './TopRecipes';
import RecentRecipes from './RecentRecipes';
import { Container } from 'react-bootstrap';

const Main = () => {
    return (
        <Container>
         <ChiefCards></ChiefCards> 
         <TopRecipes></TopRecipes>  
         <RecentRecipes></RecentRecipes>
        </Container>
    );
};

export default Main;