// Styles:
import { FormContainer, Item, ItemDescription, ItemInfo, ItemName, ItemPrice } from "./MealsListItem.styles";
// Component:
import MealsListItemForm from "./MealsListItemForm";
// Hook:
import { useContext } from "react";
// Context:
import CartContext from "../../store/cartContext";

const MealsListItem = ({ id, name, description, price}) => {
  const context = useContext(CartContext);

  const addToCartHandler = (amount) => {
    context.addItem({
      id, name, amount, price
    });
  };

  return (
    <Item>
      <ItemInfo>
        <ItemName>{name}</ItemName>
        <ItemDescription>{description}</ItemDescription>
        <ItemPrice>${price}</ItemPrice>
      </ItemInfo>
      <FormContainer>
        <MealsListItemForm onAddToCart={addToCartHandler} />
      </FormContainer>
    </Item>
  );
};

export default MealsListItem;