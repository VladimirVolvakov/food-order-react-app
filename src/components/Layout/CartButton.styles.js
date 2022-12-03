import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  font: inherit;
  background-color: #221e1f;
  color: #f8d855;
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem 1.5rem;
  display: flex;
  align-items: center;

  &:hover,
  &:active {
    background-color: #3a3a3a;
  }
`;

export const CartIconContainer = styled.span`
  height: 1.35rem;
  width: 1.35rem;
  font-size: 22px;
  margin-right: 1rem;
`;

export const ButtonText = styled.span`
  font-weight: 500;
  letter-spacing: 0.06em;
`;

export const Amount = styled.span`
  background-color: #3a3a3a;
  font-weight: 500;
  margin-left: 1rem;
  padding: 0.25rem 1rem;
  border-radius: 0.5rem;

  &:hover,
  &:active {
    background-color: #221e1f;
  }
`;