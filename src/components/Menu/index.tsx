import { FlatList, TouchableOpacity } from 'react-native';
import { products } from '../../mocks/products';
import { Text } from '../Text';
import { Product, ProductImage, ProductDetails, Separator, AddToCartButton } from './styles';
import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';

export function Menu() {
  return (
    <FlatList
      style={{ marginTop: 32}}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      data={products}
      keyExtractor={product => product._id}
      ItemSeparatorComponent={Separator}
      renderItem={({item: product}) => (
        <Product
          onPress={() => (null)}
        >
          <ProductImage
            source={{
              uri: `http://192.168.18.227:3001/uploads/${product.imagePath}`
            }}
          />

          <ProductDetails>
            <Text weight={600}>{product.name}</Text>
            <Text size={14} color="#666" style={{ marginVertical: 8 }} >{product.description}</Text>
            <Text size={14} weight={600}>{formatCurrency(product.price)}</Text>
          </ProductDetails>

          <AddToCartButton>
            <PlusCircle />
          </AddToCartButton>
        </Product>
      )}
    />
  );
}
