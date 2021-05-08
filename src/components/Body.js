import React, { useState } from "react";
import Category from "./Category";
import "./css/body.css";
import data from "./Data";
import { Container, Row, Col } from "reactstrap";

function Body() {
  const [categories, setCategories] = useState(data);
  // console.log(categories.length);
  return (
    <div className="container" style={{ marginLeft: "100px" }}>
      <Container>
        <Row>
          {categories.map((category) => {
            return (
              <Col xs="12" md="4" sm="6" lg="3">
                <div key={new Date().getTime().toString()}>
                  <Category {...category} />
                  {/* {console.log(category)} */}
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
