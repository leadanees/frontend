import React, { useEffect, useState } from "react";
import TourCard from "../shared/TourCard";
import { Col } from "reactstrap";
import {customAxios } from '../AxiosHttp';

const FeatureList = () => {

    const [featuredData , setFeaturedData] = useState([]);

    useEffect( () => {
        getSearchFeatured();
    },[]);

    const getSearchFeatured = () =>{
        customAxios.get('/tours/search/getByFeature').then((response) => {
            let result = response.data;
            debugger
            setFeaturedData(result.data);
        }).catch((error) => {
            console.log(error);
        });
    };

    return <>
        {
            Array.isArray(featuredData) && featuredData.map((tour) => (
                <Col lg='3' className="mb-4" key={tour._id}>
                    <TourCard tour={tour}/>
                </Col>
            ))
        }
    </>
}

export default FeatureList;