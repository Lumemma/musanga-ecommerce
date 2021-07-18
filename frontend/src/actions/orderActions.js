import Axios from 'axios';
import { EMPTY_CART } from '../types/cartTypes';
import { CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, DELETE_ORDER_FAIL, DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, DELIVER_ORDER_FAIL, DELIVER_ORDER_REQUEST, DELIVER_ORDER_SUCCESS, DETAILS_ORDER_FAIL, DETAILS_ORDER_REQUEST, DETAILS_ORDER_SUCCESS, LIST_ORDER_FAIL, LIST_ORDER_REQUEST, LIST_ORDER_SUCCESS, ORDER_MINE_LIST_FAIL, ORDER_MINE_LIST_REQUEST, ORDER_MINE_LIST_SUCCESS, PAY_ORDER_FAIL, PAY_ORDER_REQUEST, PAY_ORDER_SUCCESS } from '../types/orderTypes';



export const createOrder = (order) => async (dispatch, getState) => {
    dispatch({ type: CREATE_ORDER_REQUEST, payload: order });
    try {
      const {
        userSignin: { userInfo },
      } = getState();
      const { data } = await Axios.post('/api/orders', order, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      dispatch({ type: CREATE_ORDER_SUCCESS, payload: data.order });
      dispatch({ type: EMPTY_CART });
      localStorage.removeItem('cartItems');
    } catch (error) {
      dispatch({
        type: CREATE_ORDER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const detailsOrder = (orderId) => async (dispatch, getState) => {
    dispatch({ type: DETAILS_ORDER_REQUEST, payload: orderId });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.get(`/api/orders/${orderId}`, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      dispatch({ type: DETAILS_ORDER_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: DETAILS_ORDER_FAIL, payload: message });
    }
  };

  export const payOrder = (order, paymentResult) => async (
    dispatch,
    getState
  ) => {
    dispatch({ type: PAY_ORDER_REQUEST, payload: { order, paymentResult } });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = Axios.put(`/api/orders/${order._id}/pay`, paymentResult, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      dispatch({ type: PAY_ORDER_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: PAY_ORDER_FAIL, payload: message });
    }
  };

  export const listOrderMine = () => async (dispatch, getState) => {
    dispatch({ type: ORDER_MINE_LIST_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.get('/api/orders/mine', {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      dispatch({ type: ORDER_MINE_LIST_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: ORDER_MINE_LIST_FAIL, payload: message });
    }
  };

  export const listOrders = () => async (dispatch, getState) => {
    dispatch({ type: LIST_ORDER_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.get('/api/orders', {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      console.log(data);
      dispatch({ type: LIST_ORDER_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: LIST_ORDER_FAIL, payload: message });
    }
  };

  export const deleteOrder = (orderId) => async (dispatch, getState) => {
    dispatch({ type: DELETE_ORDER_REQUEST, payload: orderId });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = Axios.delete(`/api/orders/${orderId}`, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      dispatch({ type: DELETE_ORDER_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: DELETE_ORDER_FAIL, payload: message });
    }
  };

  export const deliverOrder = (orderId) => async (dispatch, getState) => {
    dispatch({ type: DELIVER_ORDER_REQUEST, payload: orderId });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = Axios.put(
        `/api/orders/${orderId}/deliver`,
        {},
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({ type: DELIVER_ORDER_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: DELIVER_ORDER_FAIL, payload: message });
    }
  };