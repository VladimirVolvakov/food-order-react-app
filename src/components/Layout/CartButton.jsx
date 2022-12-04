// Styles:
import { Amount, Button, ButtonText, CartIconContainer } from "./CartButton.styles";
// Icon:
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartButton = ({ onClick }) => {
  return (
    <Button className="abcd">
      <CartIconContainer>
        <AiOutlineShoppingCart />
      </CartIconContainer>
      <ButtonText onClick={onClick}>Your Cart</ButtonText>
      <Amount>4</Amount>
    </Button>
  );
};

export default CartButton;