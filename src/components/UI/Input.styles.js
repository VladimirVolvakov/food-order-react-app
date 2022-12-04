import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const Label = styled.label`
  font-weight: 600;
  margin-right: 0.5rem;
`;

export const AmountInput = styled.input`
  width: 3rem;
  padding: 0.25rem 0.5rem;
  font: inherit;
  border: 1px solid #ccc;
  border-radius: 0.5rem;

  &:focus {
    outline: none;
  }
`;