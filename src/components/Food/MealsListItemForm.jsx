// Styles:
import { Button, Form } from "./MealsListItemForm.styles";
// Component:
import Input from "../UI/Input";
// Hook:
import { useRef, useState } from "react";

const MealsListItemForm = ({ onAddToCart }) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountRef = useRef();

  const onSubmitHandler = event => {
    event.preventDefault();

    const enteredAmount = amountRef.current.value;

    if (enteredAmount.trim().length === 0 || +enteredAmount < 1 || +enteredAmount > 10) {
      setAmountIsValid(false);
      return;
    }

    onAddToCart(+enteredAmount);
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <Input
        labelText="Amount"
        ref={amountRef}
        id="amount"
        type="number"
        inputParams={{ min: "1", max: "10", step: "1", defaultValue: "1" }}
      />
      <Button>Add</Button>
      { !amountIsValid && <p>Please enter a valid amount (1-10)</p> }
    </Form>
  );
};

export default MealsListItemForm;
