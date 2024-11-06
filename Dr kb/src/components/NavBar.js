
import { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaHome, FaTrophy, FaGlobe ,FaBasketballBall} from 'react-icons/fa'; // Add FaGlobe
import logo from '../assets/img/islam.jpg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import '../components/Navbar.css';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img 
                        src={logo} 
                        alt="Logo" 
                        style={{ width: '100px', height: '100px', borderRadius: '50%' }} 
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            href="#home"
                            className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('home')}
                        >
                            <FaHome size={40} />
                        </Nav.Link>
                       
                       <Nav.Link
                   href="#hobbies"
             className={activeLink === 'hobbies' ? 'active navbar-link' : 'navbar-link'}
           onClick={() => onUpdateActiveLink('hobbies')}
>                 <FaBasketballBall size={40} />
                   </Nav.Link>                     
                        <Nav.Link
                            href="#tour"
                            className={activeLink === 'tour' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('tour')}
                        >
                            <FaGlobe size={40} /> {/* Changed icon here */}
                        </Nav.Link>
                        <Nav.Link
                            href="#achievements"
                            className={activeLink === 'achievements' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('achievements')}
                        >
                            <FaTrophy size={40} />
                        </Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href="#">
                                <img src={navIcon1} alt="" />
                            </a>
                            <a href="#">
                                <img src={navIcon2} alt="" />
                            </a>
                            <a href="#">
                                <img src={navIcon3} alt="" />
                            </a>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

