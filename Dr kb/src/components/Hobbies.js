

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './hobbies.css'; // Assuming you have a separate CSS file for hobbies

const hobbiesData = [
    {
    
        image: require('../assets/img/child.jpg'), // Add your image path
    },
    {
    
        image: require('../assets/img/congratulations-with-confetti-vector-7353271.jpg'), // Add your image path
    },
    {
       
        image: require('../assets/img/flowers.jpg'), // Add your image path
    },
    {
       
        image: require('../assets/img/images.jpg'), // Add your image path
    },
    {
       
        image: require('../assets/img/head-department-hod-acronym-arranged-260nw-1930181996.webp'), // Add your image path
    },
    {
       
        image: require('../assets/img/teac.jpg'), // Add your image path
    },
];

export const Hobbies = () => {
  
    return (
        <section className='hobbies' id='hobbies'>
            <Container>
                <h2 className='section-title'>CONGRATS</h2>
                <Row>
                    {hobbiesData.map((hobby, index) => (
                        <Col key={index} md={6} lg={4}>
                            <div className='hobby-card'>
                                <img src={hobby.image} alt={hobby.title} className='hobby-image' />
                                <h3>{hobby.title}</h3>
                                <p className='year'>{hobby.year}</p>
                                <p>{hobby.description}</p>
                                <p className='fun-fact'><strong>Fun Fact:</strong> {hobby.funFact}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}





