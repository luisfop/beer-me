import React from "react";

import "./CardComponent.css";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import { BeerType } from "../../types/BeerType";

const CardComponent: React.FC<BeerType> = ({
  name,
  image,
  description,
  price,
  alcool,
  ibu
}) => {
  return (
    <Card className="card">
      <CardActionArea>
        <CardMedia image={image} className="beer-image" />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className="label"
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className="description"
          >
            {description}
            <p>IBU: {ibu}</p>
            <p>Alcool %: {alcool}</p>
            <p>{`Price: ${price},00`}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardComponent;
