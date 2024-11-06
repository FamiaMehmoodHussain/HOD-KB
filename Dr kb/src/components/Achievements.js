
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './achievements.css';

const achievementsData = [
    {
        title: "PhD", 
        description: " PhD from USA PhD from USA ",
        image: require('../assets/img/achive.webp'), // Add your image path
    },
    {
        title: "post doc",
        description: "post doc from Canada and Qatar in CS.",
        image: require('../assets/img/spain.jpg'), // Add your image path
    },
    {
        title: "Work",
        description: "Worked at COMSATS Institute Of Information Technology Abbottabad",
        image: require('../assets/img/t1.jpg'), // Add your image path
    },
    {
        title: "Research Professor",
        description: "Research Professor at Simon Fraser University Canada and Qatar University",
        image: require('../assets/img/t2.jpg'), // Add your image path
    },
   
    {
        title:" MS University",
        description: "Studied at North Dakota State University",
        image: require('../assets/img/kb.png'), // Add your image path
    },

    {
      
        description: " Abbottabad",
        image: require('../assets/img/kb.png'), // Add your image path
    },
    {
       
        description: " Abbottabad",
        image: require('../assets/img/p6.png'), // Add your image path
    },
    {
        title:"BS University", 
        description: " Studied at COMSATS Institute Of Information Technology Abbottabad",
        image: require('../assets/img/achive.webp'), // Add your image path
    },
    {
        title: "School",
        description: "Went to F G Boys Public High School Abbottabad",
        image: require('../assets/img/child.jpg'), // Add your image path
    },
];

const Achievements = () => {
    return (
        <section className='achievements' id='achievements'>
            <Container>
                <h2 className='section-title'>Achievements</h2>
                <Row>
                    {achievementsData.map((achievement, index) => (
                        <Col key={index} md={6} lg={4}>
                            <div className='achievement-card'>
                                <img src={achievement.image} alt={achievement.title} className='achievement-image' />
                                <h3>{achievement.title}</h3>
                                <p className='year'>{achievement.year}</p>
                                <p>{achievement.description}</p>
                                
                            </div>
                                 
                        </Col>
                    ))}
                </Row>
            </Container>
            <p>FROM:FAMIA MEHMOOD</p>
        </section>
    );
};

export default Achievements;
