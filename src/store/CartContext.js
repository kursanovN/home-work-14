import { createContext, useEffect, useReducer } from "react";
import { fetchRequest } from "../lib/fetchAPI";

export const cartContext = createContext({
  items: [],
  totalAmount: 0,
});

const cartReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.ADD:
      return action.payload;

    case ACTION_TYPE.INCREMENT:
      return action.payload;

    case ACTION_TYPE.DECREMENT:
      return action.payload;

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

  async function addItem(id, amount) {
    console.log(amount);
    try {
      const response = await fetchRequest(`/foods/${id}/addToBasket`, {
        method: "POST",
        body: { amount },
      });
console.log(response,'response ');
      dispatchCartState({ type: ACTION_TYPE.ADD, payload: response.items });
    } catch (error) {
      new Error(error);
    }
  }

  async function getBasket() {
    try {
      const response = await fetchRequest("/basket");
      dispatchCartState({ type: ACTION_TYPE.ADD, payload: response.items });
    } catch (error) {
      new Error(error);
    }
  }

  useEffect(() => {
    getBasket();
  }, []);

  const increment = async (id, amount) => {
    try {
      const response = await fetchRequest(`/basketItem/${id}/update`, {
        method: "PUT",
        body: { amount },
      });
      dispatchCartState({
        type: ACTION_TYPE.INCREMENT,
        payload: response.items,
      });

      getBasket();
    } catch (error) {
      new Error(error);
    }
  };

  const decrement = async (id, amount) => {
    try {
      if (amount !== 0) {
        const response = await fetchRequest(`/basketItem/${id}/update`, {
          method: "PUT",
          body: { amount },
        });

        dispatchCartState({
          type: ACTION_TYPE.DECREMENT,
          payload: response.items,
        });
      } else {
        const response = await fetchRequest(`/basketItem/${id}/delete`, {
          method: "DELETE",
          body: { amount },
        });

        dispatchCartState({
          type: ACTION_TYPE.DECREMENT,
          payload: response.items,
        });
      }

      getBasket();
    } catch (error) {
      new Error(error);
    }
  };

  const orderAmount = cartState?.reduce(
    (prev, current) => prev + current.amount,
    0
  );

  const totalPrice = cartState?.reduce(
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
