// Context:
import CartContext from "./cartContext";
// Hook:
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (defaultCartState, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedItems = [action.payload, ...defaultCartState.items];
    const updatedTotalAmount = defaultCartState.totalAmount + action.payload.price * action.payload.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
    // let index = defaultCartState.items.indexOf(action.payload);

    // if (index === -1) {
    //   return [action.payload, ...defaultCartState.items];
    // } else {
    //   defaultCartState.items[index].amount += action.payload.amount;
    //   return [...defaultCartState.items];
    // }
  }

  // if (action.type === "REMOVE_ITEM") {
  //   delete defaultCartState.items[action.payload];
  //   return [...defaultCartState.items];
  // };

  return defaultCartState;
};

const CartContextProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", payload: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", payload: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
