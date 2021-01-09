import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import { Switch, Route } from "react-router-dom";

const HatsPage = () => {
  return <div>Hats Page</div>;
};

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/shop/hats">
          <HatsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
