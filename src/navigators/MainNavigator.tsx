import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { COLORS } from '../shared/theme';

const Stack = createNativeStackNavigator();

export const MainNavigator = () => {
    return (
    
        <Stack.Navigator 
            initialRouteName='HomeScreen'
            screenOptions={{
                headerTitleAlign: 'center',
                headerShown: false,
                headerShadowVisible: false,
                navigationBarColor: COLORS.bg_body,
                contentStyle: {
                    backgroundColor: COLORS.bg_body,
                }
            }}
        >

            <Stack.Screen name="HomeScreen" options={{ title: 'eCommerce' }} component={HomeScreen} />
        </Stack.Navigator>
    )
}
