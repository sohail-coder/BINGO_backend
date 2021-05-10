import React, { useState } from "react";
import Category from "./Category";
import "./css/body.css";
import data from "./Data";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
function Body() {
  const [categories, setCategories] = useState(data);
  // setCategories(data);
  // console.log(categories.length);
  return (
    <div style={{ marginLeft: "100px" }}>
      <Container className="container">
        <Row>
          {categories.map((category) => {
            return (
              <Col xs="12" md="4" sm="6" lg="3">
                <div key={new Date().getTime().toString()}>
                  {/* {console.log(category)} */}
                  <Link to={`${category.uri}`}>
                    <Category {...category} />
                  </Link>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Body;
