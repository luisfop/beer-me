import React, { useState, useEffect } from "react";

import "./BeersPage.css";

import { Beers } from "../../mock/beers";
import { BeerType } from "../../types/BeerType";
import TextField from "@material-ui/core/TextField";
import CardComponent from "../../components/CardComponent/CardComponent";

const BeersPage = () => {
  const [products, setProducts] = useState<BeerType[]>([]);
  const [filterProduct, setFilterProduct] = useState<string>("");

  useEffect(() => {
    const getBeers = (): void => {
      setProducts(Beers);
    };
    getBeers();
  }, []);

  const productCards = products
    .filter(product => {
      return (
        product.name.toLowerCase().indexOf(filterProduct.toLowerCase()) >= 0
      );
    })
    .map(product => (
      <CardComponent
        name={product.name}
        description={product.description}
        alcool={product.alcool}
        image={product.image}
        ibu={product.ibu}
        price={product.price}
      />
    ));

  return (
    <div className="beers--page">
      <h1 className="title">Beers page!!!</h1>
      <form className="search">
        <TextField
          label="xablau"
          variant="filled"
          className="form--input"
          onChange={e => setFilterProduct(e.target.value)}
        />
      </form>

      <section className="beer--display">
        <div className="display">{productCards}</div>
      </section>
    </div>
  );
};

export default BeersPage;
