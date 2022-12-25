// Styles:
import { ActionsContainer, Amount, AmountContainer, Button, CartList } from "./Cart.styles";
// Components:
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import Modal from "../UI/Modal";
// Hook:
import { useContext, useState } from "react";
// Context:
import CartContext from "../../store/cartContext";

const Cart = ({ onCloseModalWindow }) => {
  const context = useContext(CartContext);

  const [checkoutIsShown, setCheckoutIsShown] = useState(false);

  const totalAmount = `$${context.totalAmount.toFixed(2)}`;
  const cartHasItems = context.items.length > 0;

  const addItemToCartHandler = (item) => {
    context.addItem({ ...item, amount: 1 });
  };

  const removeItemFromCartHandler = (id) => {
    context.removeItem(id);
  };

  const orderHandler = () => {
    setCheckoutIsShown(true);
  };

  const cancelHandler = () => {
    setCheckoutIsShown(false);
  };

  const submitOrderHandler = (userData) => {
    fetch("https://food-order-app-79c69-default-rtdb.europe-west1.firebasedatabase.app/orders.json", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        order: context.items
      })
    });
  };

  return (
    <Modal>
      {context.items.length > 0 && (
        <CartList>
          {context.items.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              price={item.price}
              amount={item.amount}
              onAdd={addItemToCartHandler.bind(null, item)}
              onRemove={removeItemFromCartHandler.bind(null, item.id)}
            />
          ))}
        </CartList>
      )}
      <AmountContainer>
        <Amount>Total amount</Amount>
        <Amount>{totalAmount}</Amount>
      </AmountContainer>
      {checkoutIsShown 
        && (<Checkout onCancel={cancelHandler} onSubmit={submitOrderHandler} />)
      }
      {!checkoutIsShown && (
        <ActionsContainer>
          <Button onClick={onCloseModalWindow}>Close</Button>
          {cartHasItems && (
            <Button purpose="order" onClick={orderHandler}>
              Order
            </Button>
          )}
        </ActionsContainer>
      )}
    </Modal>
  );
};

export default Cart;
