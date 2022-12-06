// Styles:
import { AmountInput, InputContainer, Label } from "./Input.styles";
//
import { forwardRef } from "react";

const Input = forwardRef(({ id, inputParams, labelText, type }, ref) => {
  return (
    <InputContainer>
      <Label htmlFor={id}>{labelText}</Label>
      <AmountInput
        ref={ref}
        id={id}
        type={type ? type : "text"}
        {...inputParams}
      />
    </InputContainer>
  );
});

export default Input;
