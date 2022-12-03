import styled, { keyframes } from "styled-components";

const appear = keyframes`
  from {
    opacity: 0;
    transform: translateY(3rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Meals = styled.section`
  width: 90%;
  max-width: 60rem;
  margin: 2rem auto;
  animation: ${appear} 1s ease-out forwards;
`;

export const ListOfMeals = styled.ul`
  list-style: none;
`;