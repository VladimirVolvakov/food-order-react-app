// Styles:
import { ActionsContainer, Amount, AmountContainer, Button, CartList, Container } from "./Cart.styles";

const Cart = () => {
  const cartItems = [
    { id: 'c1', name: 'Burger', amount: 1, price: 2.59 },
    { id: 'c2', name: 'French Fries Big', amount: 1, price: 1.39},
    { id: 'c3', name: 'Philadelphia Rolls', amount: 1, price: 4.59}
  ]

  return (
    <Container>
      <CartList>
        {cartItems.map(item => <li>{item.name}</li>)}
      </CartList>
      <AmountContainer>
        <Amount>Total amount</Amount>
        <Amount>$8.57</Amount>
      </AmountContainer>
      <ActionsContainer>
        <Button>Close</Button>
        <Button>Order</Button>
      </ActionsContainer>
    </Container>
  );
};

export default Cart;