import React from "react";

import "./Home.css";

import Banner from "../../layout/Banner/banner";
import CardComponent from "../../components/CardComponent/CardComponent";

import { Link } from "react-router-dom";
import { Beers } from "../../mock/beers";

import { useViewport } from "../../components/shared/ViewportContext/useViewport";

const Home = () => {
  const { width } = useViewport();

  const homeCards = Beers.map(beer => (
    <Link to="/products">
      <CardComponent
        key={beer.name}
        name={beer.name}
        image={beer.image}
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
          <div className="beers">
            {width <= 1420 ? homeCards.slice(0, 3) : homeCards.slice(0,4)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
