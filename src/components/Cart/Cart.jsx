// Styles:
import { ActionsContainer, Amount, AmountContainer, Button, CartList, FeedbackMessage, SendingDataMessage } from "./Cart.styles";
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

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

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://food-order-app-79c69-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
        {
          method: "POST",
          body: JSON.stringify({
            user: userData,
            order: context.items,
          }),
        }
      );

      if (!response.ok) throw new Error("Something went wrong...");
    } catch (err) {
      setError(err.message);
    }

    setIsSubmitting(false);
    setSubmitted(true);
    context.clearCart();
  };

  return (
    <Modal>
      {!isSubmitting && !submitted && (
        <>
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
          {checkoutIsShown && (
            <Checkout onCancel={cancelHandler} onSubmit={submitOrderHandler} />
          )}
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
        </>
      )}

      {isSubmitting && !submitted && (
        <SendingDataMessage>Sending order & user data...</SendingDataMessage>
      )}

      {!isSubmitting && submitted && (
        <>
          <ActionsContainer>
            <Button onClick={onCloseModalWindow} purpose="order">
              X
            </Button>
          </ActionsContainer>
          <FeedbackMessage>
            We successfully received your order.
          </FeedbackMessage>
          <FeedbackMessage>
            Our admin will call you back as soon as possible to clarify order
            details.
          </FeedbackMessage>
        </>
      )}

      {!isSubmitting && !submitted && error && (
        <>
          <ActionsContainer>
            <Button onClick={onCloseModalWindow} purpose="order">
              X
            </Button>
          </ActionsContainer>
          <FeedbackMessage>
            Something went wrong cause... Please try again.
          </FeedbackMessage>
        </>
      )}
    </Modal>
  );
};

export default Cart;
