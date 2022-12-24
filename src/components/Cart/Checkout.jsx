// Styles:
import { Button, Form, FormControl, Input, Label } from "./Checkout.styles";

const Checkout = () => {
  return (
    <Form>
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
      <Button>Confirm</Button>
    </Form>
  );
};

export default Checkout;