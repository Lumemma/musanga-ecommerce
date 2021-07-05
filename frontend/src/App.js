import React from "react";
import {BrowserRouter, Link, Route} from "react-router-dom"
import Homescreen from "./Screens/Homescreen";
import Productscreen from "./Screens/Productscreen";
import Cartscreen from "./Screens/Cartscreen";
import { useDispatch, useSelector } from "react-redux";
import SignInscreen from "./Screens/SignInscreen";
import { signOut } from "./actions/userActions";
import Registerscreen from "./Screens/Registerscreen";
import Shippingscreen from "./Screens/Shippingscreen";
import Paymentscreen from "./Screens/Paymentscreen";




function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signOut());
  };


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
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
        </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={Cartscreen}></Route>
          <Route path="/product/:id" component={Productscreen}></Route>
          <Route path="/signin" component={SignInscreen}></Route>
          <Route path="/register" component={Registerscreen}></Route>
          <Route path="/shipping" component={Shippingscreen}></Route>
          <Route patth="/payment" component={Paymentscreen}></Route>
          <Route path="/" component={Homescreen} exact></Route>
        </main>
        <footer className="row center">All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
