import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
 
// import MainTabNavigator from './MainTabNavigator'
import HomeScreen from '../Container/Home/HomeScreen'

const Stack = createStackNavigator();

function AppNavigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default AppNavigator