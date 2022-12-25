// Styles:
import { ActionsContainer, Button, ErrorMessage, Form, FormControl, Input, Label } from "./Checkout.styles";
// Hook:
import { useRef, useState } from "react";

const Checkout = ({ onCancel }) => {
  const [checkoutFormDataValidity, setCheckoutFormDataValidity] = useState({
    name: true,
    phone: true,
    city: true,
    address: true
  });

  const nameInputRef = useRef();
  const phoneInputRef = useRef();
  const cityInputRef = useRef();
  const addressInputRef = useRef();

  const isInputEmpty = (value) => value.trim().length === 0;

  const confirmHandler = (event) => {
    event.preventDefault();

    const userName = nameInputRef.current.value;
    const userPhone = phoneInputRef.current.value;
    const userCity = cityInputRef.current.value;
    const userAddress = addressInputRef.current.value;

    const userNameIsValid = !isInputEmpty(userName);
    const userPhoneIsValid = userPhone.trim().length >= 10 && userPhone.trim().length <= 17;
    const userCityIsValid = !isInputEmpty(userCity);
    const userAddressIsValid = !isInputEmpty(userAddress);
    const formIsValid = 
      userNameIsValid &&
      userPhoneIsValid &&
      userCityIsValid &&
      userAddressIsValid;

    setCheckoutFormDataValidity({
      name: userNameIsValid,
      phone: userPhoneIsValid,
      city: userCityIsValid,
      address: userAddressIsValid
    });

    if (!formIsValid) {
      return;
    };

    console.log("Form is submitted!");
  };

  const propsControl = (key) => {
    return !checkoutFormDataValidity[key] ? "invalid" : "";
  };

  return (
    <Form onSubmit={confirmHandler}>
      <FormControl>
        <Label htmlFor="name" validity={propsControl("name")}>
          Your Name
        </Label>
        <Input
          id="name"
          type="text"
          ref={nameInputRef}
          validity={propsControl("name")}
        />
        {!checkoutFormDataValidity.name && (
          <ErrorMessage>Please enter a valid name</ErrorMessage>
        )}
      </FormControl>
      <FormControl>
        <Label htmlFor="phone" validity={propsControl("phone")}>
          Your Phone Number
        </Label>
        <Input
          id="phone"
          type="tel"
          ref={phoneInputRef}
          validity={propsControl("phone")}
        />
        {!checkoutFormDataValidity.phone && (
          <ErrorMessage>Please enter a valid phone number</ErrorMessage>
        )}
      </FormControl>
      <FormControl>
        <Label htmlFor="city" validity={propsControl("city")}>
          City
        </Label>
        <Input
          id="city"
          type="text"
          ref={cityInputRef}
          validity={propsControl("city")}
        />
        {!checkoutFormDataValidity.city && (
          <ErrorMessage>Please enter a valid city</ErrorMessage>
        )}
      </FormControl>
      <FormControl>
        <Label htmlFor="address" validity={propsControl("address")}>
          Address
        </Label>
        <Input
          id="address"
          type="text"
          ref={addressInputRef}
          validity={propsControl("address")}
        />
        {!checkoutFormDataValidity.address && (
          <ErrorMessage>Please enter a valid address</ErrorMessage>
        )}
      </FormControl>
      <ActionsContainer>
        <Button type="button" onClick={onCancel}>
          Cancel
        </Button>
        <Button purpose="confirm">Confirm</Button>
      </ActionsContainer>
    </Form>
  );
};

export default Checkout;
