import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const from =  '/';
    console.log(from);

    const [errors, setErrors] = useState('');
    const [success, setSuccess] = useState('');


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        
        setErrors('');
        setSuccess('');

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setSuccess('User login successful.');
                setErrors('');
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                setErrors(error.message);
            })
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => console.log(error))
    }


    return (
        <Container className='w-25 mx-auto mt-3'>
            <h3>Please Login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email"  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password"  />
                </Form.Group>

                <Button className='me-2' variant="primary" type="submit">
                    Login
                </Button>

                {/*<Button variant="primary" type="submit">
                    Login with GitHub
                </Button> */}
                <br />
                <Form.Text className="text-secondary">
                    Don't Have an Account? <Link to="/register">Register</Link>
                </Form.Text>
                <br />
                <Form.Text className="text-success">
                    {success}
                </Form.Text>
                <Form.Text className="text-danger">
                    {errors}
                </Form.Text>
            </Form>
            <div>
                <Button onClick={handleGoogleSignIn} className='me-2' variant="primary" type="submit">
                    Login with Google
                </Button>
            </div>
        </Container>
    );
};

export default Login;