import styled from "styled-components";

export const ListItem = styled.li`
  padding: 1rem 0;
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #ccc;
`;

export const MealInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 3;
`;

export const MealName = styled.h2``;

export const MealAmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const MealAmount = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  padding: 0.25rem 0.75rem;
`;

export const MealPrice = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
  color: #b28f53;
`;

export const MealActionsContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const Button = styled.button`
  cursor: pointer;
  font: inherit;
  background-color: ${(props) => props.purpose === "add" ? "#221e1f" : "transparent"};
  color: ${(props) => (props.purpose === "add" ? "#f8d855" : "#000")};
  border: 2px solid ${(props) => (props.purpose === "add" ? "#221e1f" : "#000")};
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
  display: flex;
  align-items: center;
  font-weight: 600;

  &:hover,
  &:active {
    background-color: #3a3a3a;
    border-color: #3a3a3a;
    color: ${(props) => props.purpose !== "add" && "#fff"};
  }
`;
