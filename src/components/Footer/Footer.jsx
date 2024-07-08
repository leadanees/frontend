import React from "react";
import './footer.css'
import { Col, Container, List, ListGroup, ListGroupItem, Row } from "reactstrap";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'
const Footer = () => {
    const year = new Date().getFullYear();
    const quick__link = [
        {
            path: '/home',
            display: 'Home page'
        },
        {
            path: '/about',
            display: 'About Page'
        },
        {
            path: '/tours',
            display: 'Tour Page'
        },
    ];
    const quick__link2 = [
        {
            path: '/gallery',
            display: 'Gallary'
        },
        {
            path: '/login',
            display: 'Login page'
        },
        {
            path: '/register',
            display: 'Registration'
        },
    ]

    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg='3'>
                        <div className="logo">
                            <Link to='/'><img src={logo} alt="" /></Link>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus iure amet neque possimus. Reiciendis quae dolorum.</p>
                            <div className="social__link d-flex align-items-center gap-4">
                                <span>
                                    <Link to='#'>
                                        <i className="ri-linkedin-box-fill"></i>
                                    </Link>
                                </span>
                                <span>
                                    <Link to='#'>
                                        <i className="ri-youtube-line"></i>
                                    </Link>
                                </span>
                                <span>
                                    <Link to='#'>
                                        <i className="ri-instagram-line"></i>
                                    </Link>
                                </span>
                                <span>
                                    <Link to='https://github.com/leadanees'>
                                        <i className="ri-github-line"></i>
                                    </Link>
                                </span>
                            </div>  ``
                        </div>
                    </Col>
                    <Col lg='3'>
                        <div className="footer__quick-title1">
                            <h5>Discover</h5>
                            <ListGroup>
                                {
                                    quick__link.map((item, ind) => (
                                        <ListGroupItem key={ind} className="m-0">
                                            <Link to={item.path}>{item.display}</Link>
                                        </ListGroupItem>
                                    ))
                                }
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='3'>
                        <div className="footer__quick-title2">
                            <h5 className="footer__quick-title2">Quick Start</h5>
                            <ListGroup>
                                {
                                    quick__link2.map((item, ind) => (
                                        <ListGroupItem key={ind} className="m-0">
                                            <Link to={item.path}>{item.display}</Link>
                                        </ListGroupItem>
                                    ))
                                }
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='3'>
                            <h5 className="footer__link-title">Contact</h5>
                            <ListGroup className="footer__quick-links">
                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                                    <h6 className="mb-0 d-flex align-items-center gap-2">
                                        <span><i className="ri-map-pin-line"></i></span>
                                        Address
                                    </h6>
                                    <p className="mb-0">Mumbai, India</p>
                                </ListGroupItem>
                            </ListGroup>
                            <ListGroup className="footer__quick-links">
                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                                    <h6 className="mb-0 d-flex align-items-center gap-2">
                                        <span><i className="ri-mail-line"></i></span>
                                        Email
                                    </h6>
                                    <p className="mb-0">  aneeskhan25816@gmail.com</p>
                                </ListGroupItem>
                            </ListGroup>
                            <ListGroup className="footer__quick-links">
                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                                    <h6 className="mb-0 d-flex align-items-center gap-2">
                                        <span><i className="ri-phone-line"></i></span>
                                        Phone
                                    </h6>
                                    <p className="mb-0">+919516516512</p>
                                </ListGroupItem>
                            </ListGroup>
                    </Col>
                    <Col lg='12' className="text-center pt-5">
                        <p className="copyright">Copyright <span>{ year}</span>,designed and developed by <span>Anees Khan</span>, All rght reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;