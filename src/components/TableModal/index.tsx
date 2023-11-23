import { Text } from '../Text';
import { Body, Form, Header, Input, Overlay } from './styles';
import { Modal, TouchableOpacity, Platform } from 'react-native';
import { Close } from '../Icons/Close';
import { Button } from '../Button';


interface TableModalProps {
  visible: boolean;
  onClose: () => void;
}

export function TableModal({ visible, onClose }: TableModalProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType='fade'
    >
      <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
        <Body>
          <Header>
            <Text weight={600}>Informe a mesa</Text>
            <TouchableOpacity onPress={onClose}>
              <Close color='#666' />
            </TouchableOpacity>
          </Header>
          <Form>
            <Input
              placeholder='Numero da mesa'
              placeholderTextColor='#666'
              keyboardType="number-pad"
            />
            <Button onPress={() => alert('salvou')}>
              Salvar
            </Button>
          </Form>
        </Body>
      </Overlay>
    </Modal>
  )

}
