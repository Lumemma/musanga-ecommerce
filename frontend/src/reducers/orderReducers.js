
import { CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_RESET, CREATE_ORDER_SUCCESS, DETAILS_ORDER_FAIL, DETAILS_ORDER_REQUEST, DETAILS_ORDER_SUCCESS, ORDER_MINE_LIST_FAIL, ORDER_MINE_LIST_REQUEST, ORDER_MINE_LIST_SUCCESS, PAY_ORDER_FAIL, PAY_ORDER_REQUEST, PAY_ORDER_RESET, PAY_ORDER_SUCCESS } from '../types/orderTypes';

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