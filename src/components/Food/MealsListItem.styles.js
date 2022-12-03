import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;
`;

export const ItemInfo = styled.div`
  flex: 3;
`;

export const ItemName = styled.h3`
  font-size: 1.5rem;
`;

export const ItemDescription = styled.div`
  font-style: italic;
  font-weight: 300;
  margin: 0.25rem 0;
`;

export const ItemPrice = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: #b28f53;
`;

export const FormContainer = styled.div`
  flex: 1;
`;

