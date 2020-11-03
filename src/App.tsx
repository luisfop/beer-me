import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Header from "./layout/header/header";
import Beers from './pages/Beers/Beers';
import Contact from './pages/Contact/Contact';


function App() {
  return (
    <Router>
     <div className="App">
      <Header />
        <main className="pages">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/products" component={Beers}/>
          <Route exact path="/contact" component={Contact}/>
        </Switch>
        </main>
        
      </div>
    </Router>
  );
}

export default App;
