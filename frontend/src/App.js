import React, { useEffect, useState } from "react";
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
import UserEditscreen from "./Screens/UserEditscreen";
import SellerRoute from "./components/SellerRoute";
import Sellerscreen from "./Screens/Sellerscreen";
import SearchBox from "./components/SearchBox";
import Searchscreen from "./Screens/Searchscreen";
import { listProductCategories } from "./actions/productActions";
import LoadingBox from './components/LoadingBox';
import MessageBox from './components/MessageBox';
import Mapscreen from "./Screens/Mapscreen";


function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signOut());
  };

  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;

  useEffect(() => {
    dispatch(listProductCategories());
  }, [dispatch]);

  return (
    <BrowserRouter>
    <div className="grid-container">
        <header className="row">
          <div>

          <button
              type="button"
              className="open-sidebar"
              onClick={() => setSidebarIsOpen(true)}
            >
              <i className="fa fa-bars"></i>
            </button>

            <Link className="brand" to="/">
             musanga
            </Link>
          </div>

          <div>
            <Route
              render={({ history }) => (
                <SearchBox history={history}></SearchBox>
              )}
            ></Route>
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

           {userInfo && userInfo.isSeller && (
              <div className="dropdown">
                <Link to="#admin">
                  Seller <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/productlist/seller">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist/seller">Orders</Link>
                  </li>
                </ul>
              </div>
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

        <aside className={sidebarIsOpen ? 'open' : ''}>
          <ul className="categories">
            <li>
              <strong>Categories</strong>
              <button
                onClick={() => setSidebarIsOpen(false)}
                className="close-sidebar"
                type="button"
              >
                <i className="fa fa-close"></i>
              </button>
            </li>
            {loadingCategories ? (
              <LoadingBox></LoadingBox>
            ) : errorCategories ? (
              <MessageBox variant="danger">{errorCategories}</MessageBox>
            ) : (
              categories.map((c) => (
                <li key={c}>
                  <Link
                    to={`/search/category/${c}`}
                    onClick={() => setSidebarIsOpen(false)}
                  >
                    {c}
                  </Link>
                </li> 
              ))
            )}
          </ul>
        </aside>

        <main>
        <Switch>
        <Route path="/seller/:id" component={Sellerscreen}></Route>
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
          <Route path="/search/name/:name?" component={Searchscreen}></Route>
          <Route path="/search/category/:category" component={Searchscreen}exact></Route>
          <Route path="/search/category/:category/name/:name" component={Searchscreen}exact></Route>
          <Route path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order" component={Searchscreen}exact ></Route>
          <PrivateRoute path="/profile" component={Profilescreen}></PrivateRoute>
          <PrivateRoute path="/map" component={Mapscreen}></PrivateRoute>
          <AdminRoute path="/productlist" component={ProductListscreen}exact></AdminRoute>
          <AdminRoute path="/orderlist" component={OrderListscreen}exact></AdminRoute>
          <AdminRoute path="/userlist" component={UserListscreen}></AdminRoute> 
          <AdminRoute path="/user/:id/edit" component={UserEditscreen}></AdminRoute>
          <SellerRoute path="/productlist/seller" component={ProductListscreen}></SellerRoute>
          <SellerRoute path="/orderlist/seller" component={OrderListscreen}></SellerRoute>
          <Route path="/" component={Homescreen} exact></Route>
        </Switch>
        </main>
        <footer className="row center">All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
