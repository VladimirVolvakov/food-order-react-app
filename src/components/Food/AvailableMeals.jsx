// Styles:
import { ListOfMeals, Meals } from "./AvailableMeals.styles";
// UI component:
import Card from "../UI/Card";
// Component:
import MealsListItem from "./MealsListItem";
// Data:
import { DUMMY_DATA_MEALS } from "../../mealsData";

const AvailableMeals = () => {
  return (
    <Meals>
      <Card>
        <ListOfMeals>
          { DUMMY_DATA_MEALS.map(item => (
            <MealsListItem 
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          ))}
        </ListOfMeals>
      </Card>
    </Meals>
  );
};

export default AvailableMeals;