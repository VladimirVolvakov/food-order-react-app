// Styles:
import { Button, Form } from "./MealsListItemForm.styles";
// Component:
import Input from "../UI/Input";

const MealsListItemForm = () => {
  return (
    <Form>
      <Input
        label="Amount"
        id="amount"
        type="number"
        inputParams={{ min: "1", max: "10", step: "1", defaultValue: "1" }}
      />
      <Button>Add</Button>
    </Form>
  );
};

export default MealsListItemForm;
