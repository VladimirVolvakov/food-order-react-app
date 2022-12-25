import styled from "styled-components";

export const Form = styled.form`
  margin: 1rem 0;
  height: 19rem;
  overflow: auto;
`;

export const FormControl = styled.div`
  margin-bottom: 0.5rem;
`;

export const Label = styled.label`
  font-weight: 600;
  display: block;
  margin-bottom: 0.25rem;
`;

export const Input = styled.input`
  font: inherit;
  padding: 0.75rem 1.5rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  width: 98%;
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 1rem;
  padding-right: 0.75rem;
  margin-top: 1rem;
`;

export const Button = styled.button`
  cursor: pointer;
  font: inherit;
  background-color: ${props => props.purpose === "confirm" ? "#221e1f" : "transparent"};
  color: ${props => props.purpose === "confirm" ? "#f8d855" : "#000"};
  border: 2px solid ${props => props.purpose === "confirm" ? "#221e1f" : "#000"};
  border-radius: 0.5rem;
  padding: 0.75rem 1.5rem;
  display: flex;
  align-items: center;
  font-weight: 600;
  letter-spacing: 0.06em;

  &:hover,
  &:active {
    background-color: #3a3a3a;
    border-color: #3a3a3a;
    color: ${props => props.purpose !== "confirm" && "#fff"};
  }
`;