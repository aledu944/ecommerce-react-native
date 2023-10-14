import { View, Text, Image } from 'react-native';
import { GLOBALS } from '../../shared/globals';
import { IProductData } from '../../interfaces/products-response';
import { COLORS } from '../../shared/theme';


interface Props {
    product: IProductData;
}

export const ProductCard = ({ product }: Props) => {
    return (
        <View style={GLOBALS.product_card}>
            <View style={{ alignItems: 'center', marginBottom: 20 }}>
                <Image
                    style={{ width: 100, height: 100 }}
                    source={{ uri: `https://store.innovacode.online${product.images[0].url}` }}
                />
            </View>
            <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{product.name}</Text>
            <Text style={{ color: COLORS.text_soft, fontSize: 12, marginBottom: 10 }} numberOfLines={1}>{product.description}</Text>
            <Text style={{ fontWeight: 'bold' }}>
                Precio: <Text style={{ color: COLORS.primary, }}>{product.price}$</Text>
            </Text>
        </View>
    )
}
