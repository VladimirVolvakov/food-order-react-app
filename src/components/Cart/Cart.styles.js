import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
`;

export const CartList = styled.ul`
  list-style: none;
`;

export const AmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Amount = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1rem 0;
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 1rem;
`;

export const Button = styled.button`
  cursor: pointer;
  font: inherit;
  background-color: ${props => props.purpose === "order" ? "#221e1f" : "transparent"};
  color: ${props => props.purpose === "order" ? "#f8d855" : "#000"};
  border: 2px solid ${props => props.purpose === "order" ? "#221e1f" : "#000"};
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
    color: ${props => props.purpose !== "order" && "#fff"};
  }
`;