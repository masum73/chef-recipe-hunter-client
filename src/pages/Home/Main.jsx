import React from 'react';
import ChiefCards from './ChefCards';
import TopRecipes from './TopRecipes';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import TopChef from './TopChef';

const Main = () => {
    const allData = useLoaderData();
    const recipes = []

    allData.forEach(chef => {
        chef.recipes.forEach( recipe => {
            recipes.push(recipe);
            
        })
    
    });

    const topRecipes = recipes.slice(0,3);

   // console.log(recipes.slice(0,3));

    const topChefs = allData.slice(0,3);
    console.log(topChefs);
    return (
        <Container>
            <ChiefCards allChefs={allData} ></ChiefCards>
            <TopRecipes topRecipes = {topRecipes}></TopRecipes>
            <TopChef topChefs={topChefs}></TopChef>
        </Container>
    );
};

export default Main;