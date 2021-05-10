import React from "react";
import "./css/header.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Row, Col } from "reactstrap";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "150px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ background: "#343434" }}>
        <Row>
          <Toolbar>
            <Col xs="8" sm="9" md="10" lg="10">
              <Link to="/home">
                <span className={`${classes.title} title`}>BINGO</span>
              </Link>
            </Col>
            <Col
              xs="4"
              cm="3"
              md="2"
              lg="2"
              style={{ display: "flex", float: "right" }}
            >
              <Col lg="4"></Col>
              <Col xs="6">
                <Link
                  to="/login"
                  style={{ color: "white", letterSpacing: "2px" }}
                >
                  <Button
                    // style={{ marginLeft: "5px" }}
                    color="inherit"
                  >
                    Login
                  </Button>
                </Link>
              </Col>
              <Col xs="6">
                <span class="snipcart-checkout">
                  <ShoppingCartOutlinedIcon style={{ color: "white" }} />
                </span>

                <span
                  class="snipcart-items-count  snipcart-checkout"
                  style={{ color: "white" }}
                ></span>
              </Col>
            </Col>
          </Toolbar>
        </Row>
      </AppBar>
    </div>
  );
}

export default Header;
