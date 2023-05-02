import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container >

            <div className="page-footer font-small blue pt-4 bg-light">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <h5 className="text-uppercase">Foodaholic</h5>
                            <p>Foodaholic has lot to discover. We are passionate about cooking and sharing delicious recipes with our community. Our site is dedicated to providing you with the best recipes for any occasion, whether you're looking for a quick and easy weeknight meal, a show-stopping dessert, or something in between. <br /> <br /> Our team of expert means the chefs work tirelessly to develop and test new recipes, ensuring that every dish we share is not only delicious but also easy to follow and prepare at home. We believe that cooking should be fun and approachable for everyone, regardless of your skill level in the kitchen.</p>
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-0" />

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Contact</h5>
                            <p>Street: 5902 Silver King Blvd</p>
                            <p>City: Cape Coral</p>
                            <p>State: Florida</p>
                            <p>Zip Code: 33914</p>
                            <p>Phone Number: (239) 257-1499</p>
                            <p>Country:	United States</p>
                        </div>

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Social Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="#!">FB</a></li>
                                <li><a href="#!">Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright text-center py-3">© 2023 Copyright @ Masum
                </div>
            </div>
        </Container>
    );
};

export default Footer;