import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/shop">
          <ShopPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
