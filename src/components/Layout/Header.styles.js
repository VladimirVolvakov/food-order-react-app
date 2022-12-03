import styled from "styled-components";

export const Container = styled.div``;

export const AppHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  padding: 0 150px;
  background-color: #b28f53;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
`;

export const Logo = styled.h1``;

export const ImageContainer = styled.div`
  height: 30rem;
  width: 100%;
  z-index: 1;
  overflow: hidden;
`;

export const HeaderImage = styled.img`
  height: 100%;
  width: 110%;
  object-fit: cover;
  transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem);
`;
