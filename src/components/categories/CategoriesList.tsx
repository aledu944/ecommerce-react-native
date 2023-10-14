import { FlatList } from 'react-native';
import { useEcommerce } from '../../hooks/useEcommerce'
import { GLOBALS } from '../../shared/globals';
import { CategoryButton } from './CategoryButton';

export const CategoriesList = () => {

    const { categories } = useEcommerce();

    return (
        <FlatList
            data={ categories }
            renderItem={({ item }) => (
                <CategoryButton category={ item }/>
            )}
            horizontal
            showsHorizontalScrollIndicator={ false }
            style={ GLOBALS.categories_list }
        />
    )
}
