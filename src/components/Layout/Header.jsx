// Styles:
import { Container, AppHeader, HeaderImage, ImageContainer, Logo } from "./Header.styles";
// Image:
import Meals from "../../assets/meals.jpg";
// Component:
import CartButton from "./CartButton";

const Header = ({ onOpenModalWindow }) => {
  return (
    <Container>
      <AppHeader>
        <Logo>ReactRestaurant</Logo>
        <CartButton onClick={onOpenModalWindow} />
      </AppHeader>
      <ImageContainer>
        <HeaderImage src={Meals} alt="React Restaurant" />
      </ImageContainer>
    </Container>
  );
};

export default Header;
