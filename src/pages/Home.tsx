import React from "react";

import "./Home.css";

import Banner from "../layout/Banner/banner";
import CardComponent from "../components/CardComponent/CardComponent";

import { Link } from "react-router-dom";
import { Beers } from "../mock/beers";

const Home = () => {
  const homeCards = Beers.map(beer => (
    <Link to="/products">
      <CardComponent
        name={beer.name}
        image={beer.image}
        description={beer.description}
        price={beer.price}
        ibu={beer.ibu}
        alcool={beer.alcool}
      />
    </Link>
  ));

  return (
    <div className="home-container">
      <Banner />
      <section className="content">
        <h3 className="title">Check out our beers</h3>

        <div className="beer-container">
          <section className="beers">{homeCards.slice(0, 3)}</section>
        </div>
      </section>
    </div>
  );
};

export default Home;