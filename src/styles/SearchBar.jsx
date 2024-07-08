import React,{useRef} from "react";
import './searchbar.css';
import { Col, Form, Row, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";


const SearchBar = () => {

    const locationRef=useRef('')
    const distanceRef=useRef(0)
    const maxgroupRef=useRef(0)

    const handelSearch =() => {
        const location=locationRef.current.value;
        const distance=distanceRef.current.value;
        const maxgroup=maxgroupRef.current.value;
    if(location === '' || distance === '' || maxgroup === ''){
        alert("All the Feild Required");
    }
    }

    return (
        <Col lg='6'>
            <div className="search__bar">
                <Form className="d-flex">
                    <FormGroup className="d-flex gap-2 from__group from__group-fast ">
                        <span><i className="ri-map-pin-line"></i></span>
                        <div>
                            <h6>Location</h6>
                            <input type="text" placeholder="where you want to go?" ref={locationRef}/>
                        </div>
                    </FormGroup>
                    <FormGroup className="d-flex gap-2 from__group from__group-last">
                        <span><i className="ri-map-pin-time-line"></i></span>
                        <div>
                            <h6>Distance </h6>
                            <input type="number" placeholder="Distance in K/m?" ref={distanceRef}/>
                        </div>
                    </FormGroup>
                    <FormGroup className="d-flex gap-2 from__group from__group">
                        <span><i className="ri-group-line"></i></span>
                        <div>
                            <h6>Max Person</h6>
                            <input type="number" placeholder="0" ref={maxgroupRef} />
                        </div>
                    </FormGroup>
                    <span className="searxh__icon" onClick={handelSearch}>
                        <i className="ri-search-line"></i>
                    </span>
                    </Form>
            </div>
        </Col>
    )
}

export default SearchBar;