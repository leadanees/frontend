import React, { useState } from "react";
import { Container,Col,Row,Form,FormGroup,Button, List } from "reactstrap";
import { Link } from "react-router-dom";
import '../styles/login.css';

import loginImg from '../assets/images/login.png'
import userimg from '../assets/images/user.png'

const Login = () => {   
    const [credentials,setCredential] = useState({
        email:undefined,
        password:undefined
    });
    const handleChange = (e) => {
        setCredential(prev =>({...prev,[e.target.id]:e.target.value}));
    }

    const handleClick = (e) =>{
        e.preventDefault()
    }

    return (
        <section>
            <Container>
                <Row>
                    <Col lg='8' className="m-auto">
                        <div className="login__conatainer d-flex justify-content-between">
                            <div className="login__img">
                                <img src={loginImg} alt="" />
                            </div>
                            <div className="login__form">
                                <div className="user">
                                    <img src={userimg} alt="" />
                                </div>
                                <h2>Login</h2>
                                <Form onSubmit={handleClick}>
                                    <FormGroup>
                                        <input type="email" placeholder="Email" required id="email" onChange={handleChange}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <input type="password" placeholder="Password" required id="password" onChange={handleChange} />
                                    </FormGroup>
                                    <Button type="submit" className="btnsecondary_btn auth_btn">Login</Button>
                                </Form>
                                <p></p>
                                <p > Don't have acount?<Link to="/register">Create account</Link></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default Login;