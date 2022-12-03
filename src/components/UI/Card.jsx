// Styles:
import { Container } from "./Card.styles";

const Card = ({ children }) => {
  return (
    <Container>
      { children }
    </Container>
  );
};

export default Card;