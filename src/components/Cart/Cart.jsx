// Styles:
import { ActionsContainer, Amount, AmountContainer, Button, CartList } from "./Cart.styles";
// Component:
import Modal from "../UI/Modal";

const Cart = () => {
  const cartItems = [
    { id: 'c1', name: 'Burger', amount: 1, price: 2.59 },
    { id: 'c2', name: 'French Fries Big', amount: 1, price: 1.39},
    { id: 'c3', name: 'Philadelphia Rolls', amount: 1, price: 4.59}
  ]

  return (
    <Modal>
      <CartList>
        {cartItems.map(item => <li>{item.name}</li>)}
      </CartList>
      <AmountContainer>
        <Amount>Total amount</Amount>
        <Amount>$8.57</Amount>
      </AmountContainer>
      <ActionsContainer>
        <Button>Close</Button>
        <Button purpose="order">Order</Button>
      </ActionsContainer>
    </Modal>
  );
};

export default Cart;