import Axios from 'axios';
import { ADD_CART_ITEM, REMOVE_CART_ITEM, SAVE_CART_PAYMENT, SAVE_CART_SHIPPING } from "../types/cartTypes";


export const addToCart = (productId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/products/${productId}`);
  dispatch({
    type: ADD_CART_ITEM,
    payload: {
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      product: data._id,
      qty,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: REMOVE_CART_ITEM, payload: productId });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const saveShipping = (data) => (dispatch) => {
  dispatch({ type: SAVE_CART_SHIPPING, payload: data });
  localStorage.setItem('shippingAddress', JSON.stringify(data));
};

export const savePayment = (data) => (dispatch) => {
  dispatch({ type: SAVE_CART_PAYMENT, payload: data });
};
