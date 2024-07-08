import React,{useRef,useState} from "react";
import '../styles/tour-detail.css';
import { Container, Row, Col, Form, ListGroup } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import tourData from '../assets/data/tours';
import calculateAvgrate from "../utils/avgrate";
import avatar from '../assets/images/avatar.jpg'
import Booking from "../components/Booking/Booking";

const TourDetail = () => {
    const ids= useParams();
    const navigate =useNavigate();
    const reviewMsRef = useRef();
    const [tourRating,setTourRating]=useState(null)
    
    //this is an static data later we will call our ApI and load our data from database
    const tour = tourData.map((item) => item)
    .filter((item) => item.id === ids.id)[0];

    const {photo,title,address,desc,price,reviews,distance,maxGroupSize,city}= tour
    
    const {totalrating,avgRating} = calculateAvgrate(reviews)
    const option ={day:'numeric',month:'long',year:'numeric'}

    const submitHandler = e => {
        e.preventDefault();
        const reviewText = reviewMsRef.current.value
        alert(reviewText +" : "+tourRating);
        navigate('/tours')
    }

    // let trs = null; 
    // for(let tr of tourData){
    //     if (tr.id === ids){
    //         trs=tr;
    //         break;
    //     }
    // }
    // console.log(trs)
    
    // -------------------------Alternative loop------------------------
    // let tour = null;
    // for (let tours of tourData) {
    //     if (tours.id == Id) {
    //         tour = tours;
    //         break;
    //     }
    // }

    // const { photo, title, desc, price, reviews, city, distance, maxGroupSize } = tour;

    return (
        <>
           <Container>
            <Row>
                <Col lg='8'>
                    <div className="tour__content">
                        <img src={photo} alt="" />
                    <div className="tour__info">
                        <h2>{title}</h2>
                        <div className="d-flex align-items-center gap-5">
                        <span className="tour__rating d-flex align-items-center gap-1">
                            <i className="ri-star-fill" style={{'color':'var(--secondary-color)'}}></i>{avgRating === 0 ? null : avgRating}
                            {totalrating === 0 ? "Not Rated" : <span>({reviews.length})</span>}
                        </span>
                        <span>
                            <i className="ri-map-pin-fill" style={{'color':'var(--secondary-color)'}}></i>{address}
                        </span>  
                        </div>
                        <div className="tour__extra-detail">
                            <span>
                                <i className="ri-map-pin-2-line"> {city}</i>
                            </span>
                            <span>
                                <i className="ri-money-dollar-circle-line"> {price}/per persion</i>
                            </span>
                            <span>
                                <i className="ri-map-pin-time-line"> {distance} k/m</i>
                            </span>
                            <span>
                                <i className="ri-group-line"> {maxGroupSize} people</i>
                            </span>
                        </div>
                        <h5>Description</h5>
                        <p>{desc}</p>
                    </div>
                    {/* ============== started tour Rating section================= */}
                    <div className="tour__reviews">
                        <h4>Reviews : ({reviews?.length} reviews)</h4>
                        <Form onSubmit={submitHandler}>
                            <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                                <span onClick={() => setTourRating(1)}>
                                    <i className="ri-star-s-fill"></i>
                                </span>
                                <span onClick={() => setTourRating(2)}>
                                    <i className="ri-star-s-fill"></i>
                                </span>
                                <span onClick={() => setTourRating(3)}>
                                    <i className="ri-star-s-fill"></i>
                                </span>
                                <span onClick={() => setTourRating(4)}>
                                    <i className="ri-star-s-fill"></i>
                                </span>
                                <span onClick={() => setTourRating(5)}>
                                    <i className="ri-star-s-fill"></i>
                                </span>
                            </div>
                                <div className="review__input">
                                    <input type="text" requireds ref={reviewMsRef} placeholder="share your thought" />
                                    <button className="btn primary__btn text-white" type="submit">
                                        Submit
                                    </button>
                                </div>
                        </Form>
                        <ListGroup className="user__reviews">
                            {reviews?.map(review => <div className="review__item">
                                <img src={avatar} alt="" />
                                <div className="w-100">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div>
                                            <h5>anees</h5>
                                            <p>{new Date('11-21-2023').toLocaleDateString('en-US',option)}</p>
                                        </div>
                                        <span className="d-flex align-items-center ">
                                            5<i className="ri-star-s-fill"></i>
                                        </span>
                                    </div>
                                    <h6>Amazin tour</h6>
                                </div>
                            </div>)}
                        </ListGroup>
                    </div>
                    {/* ============== end tour Rating section ================= */}
                    </div>
                </Col>
                <Col lg='4'>
                    <Booking tour={tour} avgRating={avgRating}/>
                </Col>
            </Row>
           </Container>
        </>
    );
}

export default TourDetail;