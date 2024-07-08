import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import TourCard from "../shared/TourCard";
import Common from "./../shared/Common";
import { useLocation } from "react-router-dom";
import Newsletter from "../shared/Newsletter";

const SearchResultList = () => {
  const location = useLocation();
  debugger;
  const [data] = useState(location.state);
  console.log(data);
  return (
    <>
    <section>
      <Common title={"Tour Search Result"} />
      <Container>
        <Row>
          {data.length === 0 ? (
            <h4 className="text-center">No tour found </h4>
          ) : (
            data?.map((tour) => (
              <Col lg="3" className="mb-4" key={tour._id}>
                <TourCard tour={tour}/>
              </Col>
            ))
          )}
        </Row>
      </Container>
    </section>
    <Newsletter/>
    </>
  );
};

export default SearchResultList;
