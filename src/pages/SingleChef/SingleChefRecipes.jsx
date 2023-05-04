import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SingleChefRecipes = ({ recipe }) => {
    const { recipe_name,cooking_method, rating  } = recipe;
    const [buttonDisable, setButtonDisable] = useState(false);

    //console.log(recipes);
    const showToast = () => {
        setButtonDisable(true)
        toast('The recipe is added to your favorite', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
    return (
        <Card style={{ width: '25rem'}}>
            <Card.Body>
                <Card.Title>{recipe_name}</Card.Title>
                <Card.Text>
                    Cooking Method: {cooking_method}
                    <Rating 
                    style={{ maxWidth: 100, marginTop: '1rem' }} 
                    value={Math.round(rating || 0)} readOnly />
                </Card.Text>
                <Button onClick={showToast} disabled={buttonDisable}>Add to Favorite</Button>

                <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"> </ToastContainer>

            </Card.Body>
        </Card>
        
    );
};

export default SingleChefRecipes;