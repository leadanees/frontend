import React from "react";
import ServicesCard from "./ServicesCard";

import weatherImg from '../assets/images/weather.png'
import guidImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'
import { Col } from "reactstrap";

const ServicesList = ({item}) => {
    const serviceData=
    [
        {
            imgUrl: weatherImg,
            title: "Weather calculator",
            desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, veniam?"
        },
        {
            imgUrl: guidImg,
            title: "Best guid for tour",
            desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, veniam?"
        },
        {
            imgUrl: customizationImg,
            title: "customizable",
            desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, veniam?"
        },
    ];

    return (
        <>
            {
                serviceData.map((item,index) => 
                <Col lg='3' key={index}>
                    <ServicesCard item={item}/>
                </Col>)  
            }
        </>
    );
}

export default ServicesList;