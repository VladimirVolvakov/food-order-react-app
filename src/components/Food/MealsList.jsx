// Components:
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";
// Styles:
import { Container } from "./MealsList.styles";

const MealsList = () => {
  return (
    <Container>
      <MealsSummary />
      <AvailableMeals />
    </Container>
  );
};

export default MealsList;