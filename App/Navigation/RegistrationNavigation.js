import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
 
// import MainTabNavigator from './MainTabNavigator'
import LoginScreen from '../Container/Account/LoginScreen';
import RegistrationScreen from '../Container/Registration/RegistrationScreen';

const Stack = createStackNavigator();

function RegistrationNavigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen}  options={{ title: 'Verifikasi Beasiswa ANTAM' }}/>
          <Stack.Screen name="Registration" component={RegistrationScreen}  options={{ title: 'Pendaftaran Calon Peserta' }}/>        
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default RegistrationNavigator