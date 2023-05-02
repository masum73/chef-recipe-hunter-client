import React, { useContext, useState } from 'react';
import { Button, Container,Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';


const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);

    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState('')


    const handleRegister = event => {
        setSuccess('');
        let errors = [];

        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        

        console.log(name, photo, email, password)
        if(name.length === 0){
            errors.push('You must need to enter your name');
            //setError('You must need to enter your name');
            //return;
        }
        if(email.length === 0){
            errors.push('You must need to enter your email');
            //setError('You must need to enter your name');
            //return;
        }
        if (password.length < 6) {
            errors.push('Please add at least 6 characters in your password')
            // setError('Please add at least 6 characters in your password')
            // return;
        }
        setErrors(errors)
        if(errors.length > 0){
            return
        }
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                //setErrors('')
                form.reset();
                setSuccess('user has been created successfully')
            })
            .catch(error => {
                console.log(error);
                //setErrors(error.message);
            })
    }

    const handleAccepted = event =>{
        setAccepted(event.target.checked)
    }

    return (
        <Container className='w-25 mx-auto mt-3'>
            <h3>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter Email"  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Enter Password"  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleAccepted}
                        type="checkbox"
                        name="accept"
                        label={<>Accept <Link to="/terms">Terms and Conditions</Link> </>} />
                </Form.Group>
                <Button variant="primary" disabled={!accepted} type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Already Have an Account? <Link to="/login">Login</Link>
                </Form.Text>
                <br />
                <Form.Text className="text-success">
                    {success}
                </Form.Text>
                <Form.Text className="text-danger">
                    {
                        errors.map((e,index) => <p key={index} >{e}</p>)
                    }
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;