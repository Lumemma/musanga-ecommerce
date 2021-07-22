import React from "react";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom"
import Homescreen from "./Screens/Homescreen";
import Productscreen from "./Screens/Productscreen";
import Cartscreen from "./Screens/Cartscreen";
import { useDispatch, useSelector } from "react-redux";
import SignInscreen from "./Screens/SignInscreen";
import { signOut } from "./actions/userActions";
import Registerscreen from "./Screens/Registerscreen";
import Shippingscreen from "./Screens/Shippingscreen";
import Paymentscreen from "./Screens/Paymentscreen";
import PlaceOrderscreen from "./Screens/PlaceOrderscreen";
import Orderscreen from "./Screens/Orderscreen";
import OrderHistoryscreen from "./Screens/OrderHistoryscreen";
import Profilescreen from "./Screens/Profilescreen";
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminView";
import ProductListscreen from "./Screens/ProductListscreen";
import ProductEditScreen from "./Screens/ProductEditscreen";
import OrderListscreen from "./Screens/OrderListscreen";
import UserListscreen from "./Screens/UserListscreen";





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
                    <Link to="/profile">User Profile</Link>
                  </li>

                <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li>

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

{userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                </ul>
              </div>
            )}

        </div>
        </header>
        <main>
        <Switch>
          <Route path="/cart/:id?" component={Cartscreen}></Route>
          <Route path="/product/:id" component={Productscreen}exact></Route>
          <Route path="/product/:id/edit" component={ProductEditScreen}exact></Route> 
          <Route path="/signin" component={SignInscreen}></Route>
          <Route path="/register" component={Registerscreen}></Route>
          <Route path="/shipping" component={Shippingscreen}></Route>
          <Route path="/payment" component={Paymentscreen}></Route>
          <Route path="/placeorder" component={PlaceOrderscreen}></Route>
          <Route path="/order/:id" component={Orderscreen}></Route>
          <Route path="/orderhistory" component={OrderHistoryscreen}></Route>
          <PrivateRoute path="/profile" component={Profilescreen}></PrivateRoute>
          <AdminRoute path="/productlist" component={ProductListscreen}exact></AdminRoute>
          <AdminRoute path="/orderlist" component={OrderListscreen}></AdminRoute>
          <AdminRoute path="/userlist" component={UserListscreen}></AdminRoute> 
          <Route path="/" component={Homescreen} exact></Route>
        </Switch>
        </main>
        <footer className="row center">All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
