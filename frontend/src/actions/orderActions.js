import Axios from 'axios';
import { EMPTY_CART } from '../types/cartTypes';
import { CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, DETAILS_ORDER_FAIL, DETAILS_ORDER_REQUEST, DETAILS_ORDER_SUCCESS, PAY_ORDER_FAIL, PAY_ORDER_REQUEST, PAY_ORDER_SUCCESS } from '../types/orderTypes';



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