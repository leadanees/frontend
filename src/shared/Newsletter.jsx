import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Maleimg from '../assets/images/male-tourist.png'
import './newsletter.css';

const Newsletter = () => {
    return (
        <section className='newsletter'>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="newsletter__content">
                            <h2 className='newsletter_title'>Subscribe now to get useful travelling information</h2>
                            <div className="newsletter__input">
                                <input type="email" placeholder='email' />
                                <button className='m-2'>Subcribe</button>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, dignissimos eos. Hic a maiores labore necessitatibus atque obcaecati minima tenetur.</p>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className="newsletter__img">
                            <img src={Maleimg} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Newsletter