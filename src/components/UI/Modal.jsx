// Styles:
import { Container, Wrapper } from "./Modal.styles";

const Modal = ({ children }) => {
  return (
    <Container>
      <Wrapper>
        {children}
      </Wrapper>
    </Container>
  );
};

export default Modal;
