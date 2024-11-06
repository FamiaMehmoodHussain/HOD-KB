

import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import guideIcon from '../assets/img/head-department-hod-acronym-arranged-260nw-1930181996.webp'; 
import shim from '../assets/img/congratulations-with-confetti-vector-7353271.jpg';
import itineraryIcon from '../assets/img/p1.png';
import bookingIcon from '../assets/img/p2.png';
import metro from '../assets/img/HOD Full Form (www.tutorialsmate.com).png';
import mur from '../assets/img/p4.png';
import kfc from '../assets/img/images.jpg'; 
import  shin from '../assets/img/p3.png'; 
import hor from '../assets/img/p5.png'; 

import './tour.css';

export const Tour = () => {
    const imageSlices = [
        { src: shin },
        { src: guideIcon },
        { src: itineraryIcon},
        { src: bookingIcon },
        { src: metro  },
        { src: mur  },
        { src: kfc },
        { src: hor },
        { src: shim },
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageSlices.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="tour" id="tour">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h1>Head Of Department (HOD) COMSATS Abbottabad  DR KASHIF BILAL</h1>
                            <p>
                               
                            </p>

                            <div className="rotating-image" style={{ textAlign: 'center', position: 'relative' }}>
                                <img 
                                    src={imageSlices[currentImageIndex].src} 
                                    alt={imageSlices[currentImageIndex].title} 
                                    className="skill-image" 
                                    style={{ 
                                        width: '80%', 
                                        maxWidth: '400px', 
                                        transition: 'opacity 0.5s ease' 
                                    }} 
                                />
                                <h5>{imageSlices[currentImageIndex].title}</h5>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {imageSlices.map((slice, index) => (
                        <Col md={4} key={index} className="image-slice-card">
                            <div className="card">
                                <img src={slice.src} alt={slice.title} className="card-image" />
                                <h5 className="card-title">{slice.title}</h5>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
            
           
        </section>
    );
};

