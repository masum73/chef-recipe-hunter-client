import React from 'react';
import ChiefCards from './ChefCards';
import TopRecipes from './TopRecipes';
import RecentRecipes from './RecentRecipes';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Main = () => {
    const allData = useLoaderData();
    const recipes = []

    allData.forEach(chef => {
        chef.recipes.forEach( recipe => {
            recipes.push(recipe);
            
        })
    
    });

    const topRecipes = recipes.slice(0,3);

    console.log(recipes.slice(0,3));

    return (
        <Container>
            <ChiefCards allChefs={allData} ></ChiefCards>
            <TopRecipes topRecipes = {topRecipes}></TopRecipes>
            <RecentRecipes></RecentRecipes>
        </Container>
    );
};

export default Main;