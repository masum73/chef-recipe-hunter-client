import React from 'react';
import ChiefCards from './ChiefCards';
import TopRecipes from './TopRecipes';
import RecentRecipes from './RecentRecipes';

const Main = () => {
    return (
        <>
         <ChiefCards></ChiefCards> 
         <TopRecipes></TopRecipes>  
         <RecentRecipes></RecentRecipes>
        </>
    );
};

export default Main;