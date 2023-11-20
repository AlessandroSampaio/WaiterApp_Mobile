import { Categories } from '../components/Categories';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { CategoriesContainer, Container, Footer, FooterContainer, MenuContainer } from './styles';

export function Main() {
  return (
    <>
      <Container>
        <Header/>
        <CategoriesContainer>
          <Categories></Categories>
        </CategoriesContainer>
        <MenuContainer >
          <Menu></Menu>
        </MenuContainer>
      </Container>
      <Footer >
        <FooterContainer></FooterContainer>
      </Footer>
    </>
  );
}
