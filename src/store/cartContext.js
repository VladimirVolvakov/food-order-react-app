import { createContext } from "react";

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item, items) => {
    return [item, ...items];
  },
  removeItem: (id, items) => {
    delete items[id];
    return [...items];
  }
});

export default CartContext;