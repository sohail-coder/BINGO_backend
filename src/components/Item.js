import React from "react";
import { Row, Col } from "reactstrap";
import StarIcon from "@material-ui/icons/Star";
import "../components/css/item.css";
import Button from "@material-ui/core/Button";
function Item(cloth) {
  // const [id, name, price, ig, description, rating, brand] = cloth;
  // console.log(cloth);
  var rating = cloth.rating;
  const stars = [];

  for (var i = 0; i < rating; i++) {
    stars.push(<StarIcon style={{ color: "gold" }} />);
  }
  return (
    <div className="item__box">
      <div className="item__contents">
        <Row>
          <Col md="3">
            <div className="item__img">
              <img src={cloth.img} alt={cloth.name} />
            </div>
          </Col>
          <Col md="9">
            <div className="item_info">
              <h4 style={{ letterSpacing: "1px", textTransform: "capitalize" }}>
                <b>{cloth.name}</b>
              </h4>
              <p style={{ fontFamily: "fantasy" }}>{cloth.description}</p>
              <h5 style={{ color: "tomato" }}>₹ {cloth.price}</h5>
              {stars}
              <p style={{ marginLeft: "3px" }}>
                FREE Delivery by Thursday, May{" "}
              </p>
              <div className="item__buttons">
                <Button
                  variant="contained"
                  style={{ backgroundColor: "gold", color: "black" }}
                >
                  view item
                </Button>
                <button
                  class="snipcart-add-item"
                  data-item-id={cloth._id}
                  data-item-price={cloth.price}
                  data-item-url="https://todo-mern-server.herokuapp.com/beacon"
                  data-item-description={cloth.description}
                  data-item-image={cloth.img}
                  data-item-name={cloth.name}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Item;
