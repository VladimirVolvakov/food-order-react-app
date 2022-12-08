// Styles:
import { ActionsContainer, Amount, AmountContainer, Button, CartList } from "./Cart.styles";
// Components:
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
// Hook:
import { useContext } from "react";
// Context:
import CartContext from "../../store/cartContext";

const Cart = ({ onCloseModalWindow }) => {
  const context = useContext(CartContext);

  const totalAmount = `$${context.totalAmount.toFixed(2)}`;
  const cartHasItems = context.items.length > 0;

  const addItemToCartHandler = (item) => {
    context.addItem({...item, amount: 1});
  };

  const removeItemFromCartHandler = (id) => {
    context.removeItem(id);
  };

  return (
    <Modal>
      { context.items.length > 0 && (<CartList>
        { context.items.map(item => (
          <CartItem 
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onAdd={addItemToCartHandler.bind(null, item)}
            onRemove={removeItemFromCartHandler.bind(null, item.id)}
          />
        )) }
      </CartList>) }
      <AmountContainer>
        <Amount>Total amount</Amount>
        <Amount>{totalAmount}</Amount>
      </AmountContainer>
      <ActionsContainer>
        <Button onClick={onCloseModalWindow}>Close</Button>
        { cartHasItems && <Button purpose="order">Order</Button> }
      </ActionsContainer>
    </Modal>
  );
};

export default Cart;