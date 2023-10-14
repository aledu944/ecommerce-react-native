import { View, Text, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GLOBALS } from '../shared/globals';
import { CategoriesList, ProductList } from '../components';

export const HomeScreen = () => {
    return (
        <ScrollView style={{ flex:1 }}>
            <StatusBar style="auto" />
            
            <CategoriesList/>
            <ProductList/>
        </ScrollView>
    )
}
