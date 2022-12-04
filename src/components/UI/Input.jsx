// Styles:
import { AmountInput, InputContainer, Label } from "./Input.styles";

const Input = ({ id, inputParams, labelText, type }) => {
  return (
    <InputContainer>
      <Label htmlFor={id}>{labelText}</Label>
      <AmountInput id={id} type={type ? type : "text"} {...inputParams} />
    </InputContainer>
  );
};

export default Input;