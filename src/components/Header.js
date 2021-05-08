import React from "react";
import "./css/header.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
        <Toolbar>
          <Typography variant="h6" className={`${classes.title} title`}>
            BINGO
          </Typography>
          <Button color="inherit">Login</Button>
          <span class="snipcart-checkout">
            <ShoppingCartOutlinedIcon style={{ color: "tomato" }} />
          </span>

          <span
            class="snipcart-items-count count snipcart-checkout"
            style={{ color: "tomato" }}
          ></span>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
