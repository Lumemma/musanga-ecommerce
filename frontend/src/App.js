import React from "react";
import {BrowserRouter, Route} from "react-router-dom"
import Homescreen from "./Screens/Homescreen";
import Productscreen from "./Screens/Productscreen";
import Cartscreen from "./Screens/Cartscreen";



function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
             musanga
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
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
