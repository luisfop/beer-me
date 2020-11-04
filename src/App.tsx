import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./layout/header/header";
import BeersPage from './pages/Beers/BeersPage';
import Contact from './pages/Contact/Contact';


function App() {
  return (
    <Router>
     <div className="App">
      <Header />
        <main className="pages">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/products" component={BeersPage}/>
          <Route exact path="/contact" component={Contact}/>
        </Switch>
        </main>
        
      </div>
    </Router>
  );
}

export default App;
