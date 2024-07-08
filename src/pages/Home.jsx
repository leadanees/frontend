import React from "react";
import '../styles/home.css';
import { Container, Row, Col } from "reactstrap";
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg2 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png';
import Subtitle from '../shared/Subtitle'
import SearchBar from "../styles/SearchBar";
import ServicesList from "../services/ServicesList";
import FeatureList from "../featured tour/FeatureList";
import experienceImg from '../assets/images/experience.png'
import MasonaryImageGallery from "../components/imageFolder/MasonaryImageGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";
const Home = () => {
    return (
        <>
            {/* ==============================hero section start================================= */}
            <section>
                <Container>
                    <Row>
                        <Col lg="6">
                            <div className="hero__content">
                                <div className="hero__subtitle d-flex align-items-center">
                                    <Subtitle subtitle={"Know before you go! "} />
                                    <img src={worldImg} alt="" />
                                </div>
                                <h1>Traveling opens the doors  to create <span className="heighlight">Memories</span></h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque delectus aliquam ut. Omnis ducimus maiores consequuntur quae temporibus ipsam voluptate exercitationem magnam.</p>
                            </div>
                        </Col>
                        <Col lg="2">
                            <div className="hero_img-box">
                                <img src={heroImg} alt="" />
                            </div>
                        </Col>
                        <Col lg="2">
                            <div className="hero_img-box mt-3">
                                <video src={heroVideo} controls />
                            </div>
                        </Col>
                        <Col lg="2">
                            <div className="hero_img-box">
                                <img src={heroImg2} alt="" />
                            </div>
                        </Col>
                    </Row>
                    <SearchBar />
                </Container>
            </section>
            {/* // ============================hero section end================================= */}
            {/* //================================ section start================================= */}
            <section>
                <Container>
                    <Row>
                        <Col lg='3'>
                            <h5 className="services__subtitle">What we serve</h5>
                            <h2 className="services__title">We offer our best service</h2>
                        </Col>
                        <ServicesList />
                    </Row>
                </Container>
            </section>

            {/* //======================== Feature section start============================= */}
            <section>
                <Container>
                    <Row>
                        <Col lg='12' className="mb-3">
                            <Subtitle subtitle={"Explore"} />
                            <h5 className="Featured__tour-title">
                                We offer you our best service
                            </h5>
                        </Col>
                        <FeatureList />
                    </Row>
                </Container>
            </section>
            {/* //======================== Feature section end============================= */}
            {/* //======================== experience section start========================== */}
            <section>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <div className="experience__content">
                                <Subtitle subtitle={"Experience"} />
                                <h2>With our all experience <br />we will serve you</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    <br /> Deserunt molestias necessitatibus animi consequuntur?
                                </p>
                            </div>
                            <div className="counter__wrapper d-flex align-items-center gap-5">
                                <div className="count__box">
                                    <span>12K+</span>
                                    <h6>Successfully Trip</h6>
                                </div>
                                <div className="count__box">
                                    <span>2K+</span>
                                    <h6>Regular Client</h6>
                                </div>
                                <div className="count__box">
                                    <span>15</span>
                                    <h6>Year Experience</h6>
                                </div>
                            </div>
                        </Col>
                        <Col lg='6'>
                            <div className="experience_img">
                                <img src={experienceImg} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* //======================== experience section end========================== */}
            {/* ======================== Galary section Start========================== */}
            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <div className="gallary__title">
                                <Subtitle subtitle={"Gallary"} />
                                <h5>Visit Our Customer tour Gallary</h5>
                            </div>
                        </Col>
                        <Col lg='12'>
                            <MasonaryImageGallery/>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* ======================== Galary section end========================== */}
            {/* ======================== testimonial section end========================== */}
            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <Subtitle subtitle={"Fan Love"} />
                            <h2 className="testimonial__title">What Our Fan says About us</h2>
                        </Col>
                        <Col lg='12'>
                            <Testimonials/>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* ======================== testimonial section end========================== */}
            <Newsletter/>
        </>
    );
}

export default Home;