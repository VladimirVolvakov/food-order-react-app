// Styles:
import { ListOfMeals, Meals } from "./AvailableMeals.styles";
// Data:
import { DUMMY_DATA_MEALS } from "../../mealsData";

const AvailableMeals = () => {
  return (
    <Meals>
      <ListOfMeals>
        { DUMMY_DATA_MEALS.map(item => (
          <li>
            {item.name}
          </li>
        ))}
      </ListOfMeals>
    </Meals>
  );
};

export default AvailableMeals;