// Styles:
import { ListOfMeals, Meals } from "./AvailableMeals.styles";
// UI component:
import Card from "../UI/Card";
// Component:
import MealsListItem from "./MealsListItem";
// Hooks:
import { useCallback, useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMeals = useCallback(async () => {
    try {
      const response = await fetch(
        "https://food-order-app-79c69-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );
      if (!response.ok) throw new Error("Something went wrong...");
      const data = await response.json();

      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
          imageUrl: data[key].imageUrl
        });
      };

      setMeals(loadedMeals);
    } catch (error) {
      setError(error.message)
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  return (
    <Meals>
      <Card>
        {isLoading && <p style={{textAlign: "center"}}>Loading...</p>}
        {!isLoading && error && <p style={{textAlign: "center", color: "red"}}>{error}</p>}
        <ListOfMeals>
          {meals.map((item) => (
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
