import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home/Home.js';
import MainPage from '../screens/mainpage/MainPage.js';

const Stack = createNativeStackNavigator();

function WeatherNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
                <Stack.Screen options={{ headerShown: false }} name="Main" component={MainPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default WeatherNavigation;