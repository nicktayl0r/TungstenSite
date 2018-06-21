import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Brands from "./pages/Brands";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import FourOhFour from "./pages/FourOhFour";

import logo from "./logo.svg";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Brands" component={Brands} />
        <Route exact path="/Contact" component={Contact} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
