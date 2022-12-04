// Styles:
import { FormContainer, Item, ItemDescription, ItemInfo, ItemName, ItemPrice } from "./MealsListItem.styles";
// Component:
import MealsListItemForm from "./MealsListItemForm";

const MealsListItem = ({ name, description, price}) => {
  return (
    <Item>
      <ItemInfo>
        <ItemName>{name}</ItemName>
        <ItemDescription>{description}</ItemDescription>
        <ItemPrice>${price}</ItemPrice>
      </ItemInfo>
      <FormContainer>
        <MealsListItemForm />
      </FormContainer>
    </Item>
  );
};

export default MealsListItem;