// Styles:
import { Button, ListItem, MealActionsContainer, MealAmount, MealAmountContainer, MealInfoContainer, MealName, 
  MealPrice } from "./CartItem.styles";

const CartItem = ({ name, price, amount, onAdd, onRemove }) => {
  const mealPrice = `$${price.toFixed(2)}`;

  return (
    <ListItem>
      <MealInfoContainer>
        <MealName>{name}</MealName>
        <MealAmountContainer>
          <MealPrice>{mealPrice}</MealPrice>
          <MealAmount>x {amount}</MealAmount>
        </MealAmountContainer>
      </MealInfoContainer>
      <MealActionsContainer>
        <Button onClick={onRemove}>−</Button>
        <Button purpose="add" onClick={onAdd}>+</Button>
      </MealActionsContainer>
    </ListItem>
  );
};

export default CartItem;
