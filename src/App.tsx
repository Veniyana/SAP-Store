import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Products from "./components/pages/Products";
import AddProduct from "./components/pages/AddProduct";
import Orders from "./components/pages/Orders";
import "./styles.css";

const App = () => {
  return (
    <div>
      <HashRouter>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <Products />
          </Route>
          <Route path="/addProduct">
            <AddProduct />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
