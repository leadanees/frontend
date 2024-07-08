import React, { useState, useEffect } from "react";
import TourCard from "../shared/TourCard";
import SearchBar from "../styles/SearchBar";
import Newsletter from "../shared/Newsletter";
import Common from "../shared/Common";
import "../styles/tour.css";
import { Col, Container, Row } from "react-bootstrap";
import { customAxios } from "../AxiosHttp";

const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [allAours, setAllAours] = useState([]);

    const getAllTour = () => {
        customAxios.get(`tours`).then((response) => {
            debugger
            let result = response.data;
            setAllAours(result.data);
        } );
    }

  const tourCount = () => {
    customAxios
      .get(`tours/search/getCountTour`)
      .then((response) => {
        let result = response.data.data;
        //settourCounts(result.data);
        if (typeof result !== "number" || isNaN(result)) {
          console.error("Invalid value for tourCounts.data:", result);
          return;
        }
        const pages = Math.ceil(result / 4);
        setPageCount(pages);
        //return result
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    tourCount();
    getAllTour();
  }, []);

  return (
    <>
      <Common title={"All Tours"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {allAours.map((tour) => (
              <Col lg="3" className="mb-4" key={tour.id}>
                <TourCard tour={tour} />
              </Col>
            ))}
            <Col lg="12">
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                {[...Array(pageCount).keys()].map((number) => (
                  <span
                    key={number}
                    onClick={() => setPage(number)}
                    className={page === number ? "active__page" : ""}
                  >
                    {number + 1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};
export default Tours;
