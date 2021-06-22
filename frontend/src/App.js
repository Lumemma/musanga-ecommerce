import React from "react";
import {BrowserRouter, Link, Route} from "react-router-dom"
import Homescreen from "./Screens/Homescreen";
import Productscreen from "./Screens/Productscreen";
import Cartscreen from "./Screens/Cartscreen";
import { useSelector } from "react-redux";




function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;


  return (
    <BrowserRouter>
    <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
             musanga
            </Link>
          </div>
          <div>
            <Link to="/cart">Cart 
            {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            <Link to="/signin">Sign In</Link>
        </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={Cartscreen}></Route>
          <Route path="/product/:id" component={Productscreen}></Route>
          <Route path="/" component={Homescreen} exact></Route>
        </main>
        <footer className="row center">All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
