import React, { Component, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
import Item from "./Item";

export default class Laptops extends Component {
  constructor() {
    super();
    this.state = { laptops: [] };
  }
  laptopsList() {
    return this.state.laptops.map(function (laptop) {
      return (
        <div key={laptop._id}>
          {/* {console.log(cloth._id)} */}
          <Item {...laptop} key={laptop._id} />
        </div>
      );
    });
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/laptops")
      .then((response) => {
        // console.log(response.data);
        this.setState({ laptops: response.data });
      })
      .catch((error) => console.log(error));
  }

  componentDidUpdate() {
    axios
      .get("http://localhost:5000/laptops")
      .then((response) => {
        // console.log(rsponse.data);

        this.setState({ laptops: response.data });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <Container style={{ backgroundColor: "#ffffe5", marginBottom: "20px" }}>
        <h2
          style={{
            letterSpacing: "8px",
            textTransform: "uppercase",
            fontFamily: "Times New Roman",
          }}
        >
          laptops Section
        </h2>

        <hr />
        {this.state.laptops.length ? (
          this.laptopsList()
        ) : (
          <h5>SORRY NO ITEMS AVAILABLE</h5>
        )}
      </Container>
    );
  }
}
