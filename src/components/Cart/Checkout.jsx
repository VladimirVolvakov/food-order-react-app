// Styles:
import { Button, Form, FormControl, Input, Label } from "./Checkout.styles";

const Checkout = ({ onCancel }) => {
  const confirmHandler = (event) => {
    event.preventDefault();
    console.log('Form is submitted!');
  };

  return (
    <Form onSubmit={confirmHandler}>
      <FormControl>
        <Label htmlFor="name">Your Name</Label>
        <Input id="name" type="text" />
      </FormControl>
      <FormControl>
        <Label htmlFor="phone">Your Phone Number</Label>
        <Input id="phone" type="tel" />
      </FormControl>
      <FormControl>
        <Label htmlFor="city">City</Label>
        <Input id="city" type="text" />
      </FormControl>
      <FormControl>
        <Label htmlFor="address">Address</Label>
        <Input id="address" type="text" />
      </FormControl>
      <Button type="button" onClick={onCancel}>Cancel</Button>
      <Button>Confirm</Button>
    </Form>
  );
};

export default Checkout;