import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

export const Wrapper = styled.div`
  width: 90%;
  max-width: 40rem;
  padding: 2rem;
  background-color: white;
  border-radius: 0.5rem;
`;