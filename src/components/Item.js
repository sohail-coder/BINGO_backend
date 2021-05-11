import React from "react";
import { Row, Col } from "reactstrap";
import StarIcon from "@material-ui/icons/Star";
import "../components/css/item.css";
import Button from "@material-ui/core/Button";
function Item(product) {
  // const [id, name, price, ig, description, rating, brand] = product;
  // console.log(product);
  var rating = product.rating;
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
              <img src={product.img} alt={product.name} />
            </div>
          </Col>
          <Col md="9">
            <div className="item_info">
              <h4 style={{ letterSpacing: "1px", textTransform: "capitalize" }}>
                <b>{product.name}</b>
              </h4>
              <p style={{ fontFamily: "fantasy" }}>{product.description}</p>
              <h5 style={{ color: "tomato" }}>₹ {product.price}</h5>
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
                  data-item-id={product._id}
                  data-item-price={product.price}
                  data-item-url={`${product.uri}/${product._id}`}
                  data-item-description={product.description}
                  data-item-image={product.img}
                  data-item-name={product.name}
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
