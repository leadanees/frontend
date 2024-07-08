import React,{useState} from "react";
import './Booking.css';
import { Form, FormGroup, List,Button ,ListGroup, ListGroupItem } from "reactstrap";
import { useNavigate } from "react-router-dom";

const Booking = ({ tour, avgRating }) => {
    const { price, reviews } = tour;
    const [credentials,setCredential] = useState({
        userId:'01',
        userEmail:'example@gmail.com',
        fullName:'',
        phone:'',
        guestSize:1,
        bookAt:''
    });
    const navgate =useNavigate();

    const handelchange = (e) =>{
        setCredential(prev =>({...prev,[e.target.id]:[e.target.value]}))
    };

    const handleClick = (e) => {
        e.preventDefault();
        console.log(credentials)
        navgate('/thankyou')
    }

    const serviceFees = 10;
    const totalNumber = Number(price)*Number(credentials.guestSize) + Number(serviceFees);
    return (
        <div className="booking">
            <div className="booking__top d-flex align-items-center justify-content-between">
                <h3>${price}<span>/per person</span></h3>
                <span className="tour__rating d-flex align-items-center gap-1">
                    <i className="ri-star-fill" style={{ 'color': 'var(--secondary-color)' }}></i>
                    {avgRating === 0 ? null : avgRating}({reviews?.length})
                </span>
            </div>
            <div className="booking__form">
                    <Form className="booking__info-form" onSubmit={handleClick}> 
                    <h5>Information</h5>
                        <FormGroup>
                            <input type="text" id="fullName" required placeholder="Full Name" onChange={handelchange}/>
                        </FormGroup>
                        <FormGroup>
                            <input type="number" id="phone" required placeholder="Phone number" onChange={handelchange}/>
                        </FormGroup>
                        <FormGroup className="d-flex align-items-center gap-3">
                            <input type="date" required id="bookAt" placeholder="" onChange={handelchange}/>
                            <input type="number" required id="guestSize" placeholder="GuestSize" onChange={handelchange}/>
                            {/* <input type="text" required id="Guest" placeholder="" onChange={handelchange}/> */}
                        </FormGroup>
                    </Form>
            </div>

            {/* ================================booking bottom========================================= */}
            <div className="booking__bottom">
                <ListGroup>
                    <ListGroupItem className="border-0 px-0">
                        <h5 className="d-flex align-items-center gap-1">${price}<i className="ri-close-line"></i>1 person</h5>
                        <span>${price}</span>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 px-0">
                        <h5>Service charge</h5>
                        <span>${serviceFees}</span>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 px-0 total">
                        <h5>Total</h5>
                        <span>${totalNumber}</span>
                    </ListGroupItem>
                </ListGroup>
                <Button className="btn primary__btn w-100 mt-40" onClick={handleClick}>Book Now</Button>
            </div>
        </div>
    );
}

export default Booking;