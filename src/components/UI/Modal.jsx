// Styles:
import { Container, Wrapper } from "./Modal.styles";

const Modal = ({ children, onClickHandler }) => {
  return (
    <Container onClick={onClickHandler}>
      <Wrapper>
        {children}
      </Wrapper>
    </Container>
  );
};

export default Modal;
