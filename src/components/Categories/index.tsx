import { FlatList } from 'react-native';
import { categories } from '../../mocks/categories';
import { Text } from '../Text';
import { Category, Icon } from './styles';
import { useState } from 'react';

export function Categories() {

  const [selectedCategpry, setSelectedCategory] = useState<string | null>(null);


  function handleSelectCategory(categoryId: string) {
    setSelectedCategory(prevState => prevState === categoryId ? null : categoryId);
  }

  return (
    <FlatList
      horizontal
      data={categories}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 24 }}
      keyExtractor={(category) => category._id}
      renderItem={({ item }) => {

        const isSelected = selectedCategpry === item._id;

        return (
        <Category key={item._id} onPress={() => handleSelectCategory(item._id)}>
          <Icon>
            <Text opacity={isSelected ? 1 : 0.5} >{item.icon}</Text>
          </Icon>
          <Text size={14} weight={600}>
            {item.name}
          </Text>
        </Category>
        );
      }}
    />
  );
}
