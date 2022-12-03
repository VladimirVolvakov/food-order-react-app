// Styles:
import { Meals } from "./AvailableMeals.styles";
// Data:
import { DUMMY_DATA_MEALS } from "../../mealsData";

const AvailableMeals = () => {
  return (
    <Meals>
      <ul>
        { DUMMY_DATA_MEALS.map(item => (
          <li>
            {item.name}
          </li>
        ))}
      </ul>
    </Meals>
  );
};

export default AvailableMeals;