import { ADD_CART_ITEM, REMOVE_CART_ITEM, SAVE_CART_PAYMENT, SAVE_CART_SHIPPING } from "../types/cartTypes";


export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }

      case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };

      case SAVE_CART_SHIPPING:
      return { ...state, shipping: action.payload };

      case SAVE_CART_PAYMENT:
      return { ...state, paymentMethod: action.payload };

    default:
      return state;
  }

  
};

