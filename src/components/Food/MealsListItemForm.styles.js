import styled from "styled-components";

export const Form = styled.form`
  text-align: right;
`;

export const Button = styled.button`
  cursor: pointer;
  font: inherit;
  background-color: #221e1f;
  color: #f8d855;
  font-weight: 600;
  border: 1px solid #221e1f;
  border-radius: 0.5rem;
  padding: 0.75rem 1.5rem;

  &:hover,
  &:active {
    background-color: #3a3a3a;
    border-color: #3a3a3a;
  }
`;