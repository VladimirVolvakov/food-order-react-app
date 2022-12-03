// Styles:
import { Button, Container, AppHeader, HeaderImage, ImageContainer, Logo } from "./Header.styles";
// Image:
import Meals from "../../assets/meals.jpg";

const Header = () => {
  return (
    <Container>
      <AppHeader>
        <Logo>ReactRestaurant</Logo>
        <Button>Cart</Button>
      </AppHeader>
      <ImageContainer>
        <HeaderImage src={Meals} alt="React Restaurant" />
      </ImageContainer>
    </Container>
  );
};

export default Header;
