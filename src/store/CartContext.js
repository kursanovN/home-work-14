import { createContext, useReducer } from "react";

export const cartContext = createContext({
  items: [],
  totalAmount: 0,
});

const initialState = {
  items: [],
  totalAmount: 0,
  isExist: false,
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.ADD:
      const isExist = state.find((item) => item.id === action.payload.id);

      if (!state.length) {
        return [action.payload];
      }

      if (!isExist) {
        return [...state, action.payload];
      }

      const updatedItem = state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            amount: action.payload.amount + item.amount,
          };
        }
        return item;
      });

      return [...updatedItem];

    case ACTION_TYPE.INCREMENT:
      return state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            amount: item.amount + 1,
          };
        }
        return item;
      });

    case ACTION_TYPE.DECREMENT:
      return state.map((item) => {
        if (item.id === action.payload && item.amount !== 0) {
          return {
            ...item,
            amount: item.amount - 1,
          };
        }
        return item;
      });

    default:
      return state;
  }
};
const ACTION_TYPE = {
  ADD: "ADD",
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};
export const CartProvider = ({ children }) => {
  const [cartState, dispatchCartState] = useReducer(cartReducer, []);

  const addItem = (data) => {
    dispatchCartState({ type: ACTION_TYPE.ADD, payload: data });
  };

  const orderAmount = cartState.reduce(
    (prev, current) => prev + current.amount,
    0
  );

  const increment = (id) => {
    dispatchCartState({
      type: ACTION_TYPE.INCREMENT,
      payload: id,
    });
  };

  const decrement = (id) => {
    dispatchCartState({
      type: ACTION_TYPE.DECREMENT,
      payload: id,
    });
  };

  const totalPrice = cartState.reduce(
    (prev, current) => prev + current.price.toFixed(2) * current.amount,
    0
  );

  const cartValue = {
    items: cartState,
    totalAmount: orderAmount,
    totalPrice,
    increment,
    decrement,
    addItem,
  };

  return (
    <cartContext.Provider value={cartValue}>{children}</cartContext.Provider>
  );
};
