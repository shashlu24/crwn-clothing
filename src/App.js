import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/Header";
import SignInAndSignUp from "./pages/signin-and-signup/SignInAndSignUp";
import { auth } from "./firebase/firebase";

class App extends React.Component {
  state = {
    currentUser: null,
  };

  unSubscribeFromAuth = null;

  componentDidMount = () => {
    this.unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({
        currentUser: user,
      });
      console.log(user);
    });
  };

  componentWillUnmount = () => {
    this.unSubscribeFromAuth();
  };

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/shop">
            <ShopPage />
          </Route>
          <Route exact path="/signin">
            <SignInAndSignUp />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
