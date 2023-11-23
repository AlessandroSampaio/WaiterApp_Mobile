import { Button } from '../components/Button';
import { Categories } from '../components/Categories';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { TableModal } from '../components/TableModal';
import { CategoriesContainer, Container, Footer, FooterContainer, MenuContainer } from './styles';
import { useState } from 'react';

export function Main() {

  const [isTableModalVisible, setTableModalVisible] = useState(false);

  return (
    <>
      <Container>
        <Header />
        <CategoriesContainer>
          <Categories></Categories>
        </CategoriesContainer>
        <MenuContainer >
          <Menu></Menu>
        </MenuContainer>
      </Container>
      <Footer >
        <FooterContainer>
          <Button onPress={() => setTableModalVisible(true)}>
            Novo Pedido
          </Button>
        </FooterContainer>
      </Footer>

      <TableModal
        visible={isTableModalVisible}
        onClose={() => setTableModalVisible(false)}
      />
    </>
  );
}
