import React from "react";
import { Container,Row,Col,Button } from "reactstrap";
import { Link } from "react-router-dom";
import '../styles/thanks.css';

const ThankYou = () => {
    return (
            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <div className="thank__you">
                                <span><i className="ri-checkbox-circle-line"></i></span>
                                <h1>Thank You</h1>
                                <h3>your tour has been booked</h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
}

export default ThankYou;