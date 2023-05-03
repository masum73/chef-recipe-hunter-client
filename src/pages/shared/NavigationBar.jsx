import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Navigation = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand>Foodaholic</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <NavLink style={{ textDecoration: 'none', fontSize: '20px', margin: '5px' }} className={
                                ({ isActive }) =>
                                    isActive ? "text-success"
                                        : ""
                            } to='/'>Home</NavLink>
                            <NavLink style={{ textDecoration: 'none', fontSize: '20px', margin: '5px' }} className={
                                ({ isActive }) =>
                                    isActive ? "text-success"
                                        : ""
                            } to='/blog'>Blog</NavLink>
                            <NavLink style={{ textDecoration: 'none', fontSize: '20px', margin: '5px' }} className={
                                ({ isActive }) =>
                                    isActive ? "text-success"
                                        : ""
                            } to='/register'>Register</NavLink>
                            {
                                user ?
                                    <NavLink style={{ textDecoration: 'none', fontSize: '20px', margin: '5px' }} className={
                                        ({ isActive }) =>
                                            isActive ? "text-primary"
                                                : ""
                                    } onClick={handleLogOut} variant="secondary">Logout</NavLink>
                                    :
                                    <NavLink style={{ textDecoration: 'none', fontSize: '20px', margin: '5px' }} className={
                                        ({ isActive }) =>
                                            isActive ? "text-success"
                                                : ""
                                    } to='/login'>Login</NavLink>
                            }
                            {
                                
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Navigation;