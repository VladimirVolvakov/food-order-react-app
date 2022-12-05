// Styles:
import { Amount, Button, ButtonText, CartIconContainer } from "./CartButton.styles";
// Icon:
import { AiOutlineShoppingCart } from "react-icons/ai";
// Hook:
import { useContext } from "react";
// Context:
import CartContext from "../../store/cartContext";

const CartButton = ({ onClick }) => {
  const context = useContext(CartContext);

  const quantityOfCartItems = context.items.reduce(
    (numberOfItems, item) => {
      return numberOfItems + item.amount;
    }, 0
  );

  return (
    <Button className="abcd">
      <CartIconContainer>
        <AiOutlineShoppingCart />
      </CartIconContainer>
      <ButtonText onClick={onClick}>Your Cart</ButtonText>
      <Amount>{quantityOfCartItems}</Amount>
    </Button>
  );
};

export default CartButton;
