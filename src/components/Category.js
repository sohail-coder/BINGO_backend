import React from "react";
import "./css/category.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
});

function Category(category) {
  const classes = useStyles();
  console.log(category);
  return (
    <div className="category">
      <Card
        className={`${classes.root} item`}
        onClick={() => alert("you clicked me")}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="200"
            image={category.img}
          />
          <CardContent>
            <span>
              <Typography
                gutterBottom
                variant="h6"
                component="h2"
                style={{ textAlign: "center" }}
              >
                {category.title}
              </Typography>
            </span>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Category;
