// Styles:
import { FormContainer, Item, ItemDescription, ItemInfo, ItemName, ItemPrice } from "./MealsListItem.styles";

const MealsListItem = ({ name, description, price}) => {
  return (
    <Item>
      <ItemInfo>
        <ItemName>{name}</ItemName>
        <ItemDescription>{description}</ItemDescription>
        <ItemPrice>${price}</ItemPrice>
      </ItemInfo>
      <FormContainer>Form</FormContainer>
    </Item>
  );
};

export default MealsListItem;