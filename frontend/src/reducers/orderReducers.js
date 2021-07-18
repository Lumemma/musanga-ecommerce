
import { CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_RESET, CREATE_ORDER_SUCCESS, DELETE_ORDER_FAIL, DELETE_ORDER_REQUEST, DELETE_ORDER_RESET, DELETE_ORDER_SUCCESS, DELIVER_ORDER_FAIL, DELIVER_ORDER_REQUEST, DELIVER_ORDER_RESET, DELIVER_ORDER_SUCCESS, DETAILS_ORDER_FAIL, DETAILS_ORDER_REQUEST, DETAILS_ORDER_SUCCESS, LIST_ORDER_FAIL, LIST_ORDER_REQUEST, LIST_ORDER_SUCCESS, ORDER_MINE_LIST_FAIL, ORDER_MINE_LIST_REQUEST, ORDER_MINE_LIST_SUCCESS, PAY_ORDER_FAIL, PAY_ORDER_REQUEST, PAY_ORDER_RESET, PAY_ORDER_SUCCESS,  } from '../types/orderTypes';

export const orderCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case CREATE_ORDER_REQUEST:
        return { loading: true };
      case CREATE_ORDER_SUCCESS:
        return { loading: false, success: true, order: action.payload };
      case CREATE_ORDER_FAIL:
        return { loading: false, error: action.payload };
      case CREATE_ORDER_RESET:
        return {};
      default:
        return state;
    }
  };

  export const orderDetailsReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case DETAILS_ORDER_REQUEST:
        return { loading: true };
      case DETAILS_ORDER_SUCCESS:
        return { loading: false, order: action.payload };
      case DETAILS_ORDER_FAIL:
        return { loading: false, error: action.payload };  
      default:
        return state;
    }
  };

  export const orderPayReducer = (state = {}, action) => {
    switch (action.type) {
      case PAY_ORDER_REQUEST:
        return { loading: true };
      case PAY_ORDER_SUCCESS:
        return { loading: false, success: true };
      case PAY_ORDER_FAIL:
        return { loading: false, error: action.payload };
      case PAY_ORDER_RESET:
        return {};
      default:
        return state;
    }
  };

  export const orderMineListReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
      case ORDER_MINE_LIST_REQUEST:
        return { loading: true };
      case ORDER_MINE_LIST_SUCCESS:
        return { loading: false, orders: action.payload };
      case ORDER_MINE_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const orderListReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
      case LIST_ORDER_REQUEST:
        return { loading: true };
      case LIST_ORDER_SUCCESS:
        return { loading: false, orders: action.payload };
      case LIST_ORDER_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const orderDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETE_ORDER_REQUEST:
        return { loading: true };
      case DELETE_ORDER_SUCCESS:
        return { loading: false, success: true };
      case DELETE_ORDER_FAIL:
        return { loading: false, error: action.payload };
      case DELETE_ORDER_RESET:
        return {};
      default:
        return state;
    }
  };

  export const orderDeliverReducer = (state = {}, action) => {
    switch (action.type) {
      case DELIVER_ORDER_REQUEST:
        return { loading: true };
      case DELIVER_ORDER_SUCCESS:
        return { loading: false, success: true };
      case DELIVER_ORDER_FAIL:
        return { loading: false, error: action.payload };
      case DELIVER_ORDER_RESET:
        return {};
      default:
        return state;
    }
  };
  