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
    const updatedTotalAmount = defaultCartState.totalAmount + action.payload.price * action.payload.amount;
    // Check if added item already exists in the cart:
    const cartItemIndex = defaultCartState.items.findIndex(item => item.id === action.payload.id);
    const existingCartItem = defaultCartState.items[cartItemIndex];

    let updatedItem;
    let updatedItems;

    if (existingCartItem) {
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.payload.amount
      };

      updatedItems = [...defaultCartState.items];
      updatedItems[cartItemIndex] = updatedItem;
    } else {
      updatedItem = {...action.payload};
      updatedItems = [...defaultCartState.items, updatedItem];
    }
    
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  };

  if (action.type === "REMOVE_ITEM") {
    const cartItemIndex = defaultCartState.items.findIndex(item => item.id === action.payload)
    const existingCartItem = defaultCartState.items[cartItemIndex];

    const updatedTotalAmount = defaultCartState.totalAmount - existingCartItem.price;

    let updatedItems;

    if (existingCartItem.amount === 1) {
      updatedItems = defaultCartState.items.filter(item => item.id !== action.payload);
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1
      };

      updatedItems = [...defaultCartState.items];
      updatedItems[cartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }
  
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