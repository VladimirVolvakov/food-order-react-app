// Styles:
import { Amount, Button, ButtonText, CartIconContainer } from "./CartButton.styles";
// Icon:
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartButton = () => {
  return (
    <Button>
      <CartIconContainer>
        <AiOutlineShoppingCart />
      </CartIconContainer>
      <ButtonText>Your Cart</ButtonText>
      <Amount>4</Amount>
    </Button>
  );
};

export default CartButton;