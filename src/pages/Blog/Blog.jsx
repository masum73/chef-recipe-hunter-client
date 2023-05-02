import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container className='text-center mt-4'>
            <h2>Tell us the differences between uncontrolled and controlled components.</h2>
            <p>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
            <br />
            <h2>How to validate React props using PropTypes?</h2>
            <p>PropTypes is a package that allows you to specify the types and shapes of the props that are passed to a component in React. You can use PropTypes to validate the props that are passed to your component, which helps catch potential errors and makes your code more robust.To use PropTypes, you need to import it from the prop-types package:</p>
            <br />
            <h2>Tell us the difference between nodejs and express js.</h2>
            <p> NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</p>
            <br />
            <h2>What is a custom hook, and why will you create a custom hook?</h2>
            <p>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
            <br />

        </Container>
    );
};

export default Blog;