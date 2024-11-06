
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css'; // Make sure to create and import your CSS file

export const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Row>
                    <Col md={6}>
                        <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
                    </Col>
                    <Col md={6} className='text-right'>
                        <ul className='social-media'>
                            <li>
                                <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
                                    <i className='fab fa-facebook-f'></i>
                                </a>
                            </li>
                            <li>
                                <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
                                    <i className='fab fa-twitter'></i>
                                </a>
                            </li>
                            <li>
                                <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'>
                                    <i className='fab fa-linkedin-in'></i>
                                </a>
                            </li>
                            <li>
                                <a href='https://www.github.com' target='_blank' rel='noopener noreferrer'>
                                    <i className='fab fa-github'></i>
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};


