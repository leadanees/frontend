import React, { useState } from "react";
import { Container,Col,Row,Form,FormGroup,Button, List } from "reactstrap";
import { Link } from "react-router-dom";
import '../styles/login.css';

import registerImg from '../assets/images/register.png'
import userimg from '../assets/images/user.png'

const Register = () => {
    const [credentials,setCredential] = useState({
        userName:undefined,
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
                                <img src={registerImg} alt="" />
                            </div>
                            <div className="login__form">
                                <div className="user">
                                    <img src={userimg} alt="" />
                                </div>
                                <h2>Register</h2>
                                <Form onSubmit={handleClick}>
                                    <FormGroup>
                                        <input type="text" placeholder="UserName" required id="user" onChange={handleChange}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <input type="email" placeholder="Email" required id="email" onChange={handleChange}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <input type="password" placeholder="Password" required id="password" onChange={handleChange} />
                                    </FormGroup>
                                    <Button type="submit" className="btnsecondary_btn auth_btn">Create Account</Button>
                                </Form>
                                <p></p>
                                <p > Already have acount?<Link to="/login"> Login</Link></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default Register;