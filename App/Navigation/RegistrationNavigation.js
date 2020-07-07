import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
 
// import MainTabNavigator from './MainTabNavigator'
import ProfileScreen from '../Container/Registration/ProfileScreen';
import LoginScreen from '../Container/Account/LoginScreen';
import AkademikScreen from '../Container/Registration/AkademikScreen';
import PersyaratanScreen from '../Container/Registration/PersyaratanScreen';
import RekeningScreen from '../Container/Registration/RekeningScreen';

const Stack = createStackNavigator();

function RegistrationNavigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen}  options={{ title: 'Verifikasi Beasiswa ANTAM' }}/>
          <Stack.Screen name="Profile" component={ProfileScreen}  options={{ title: 'Profil Calon Peserta' }}/>          
          <Stack.Screen name="Akademik" component={AkademikScreen}  options={{ title: 'Data Akademik' }} />
          <Stack.Screen name="Rekening" component={RekeningScreen}  options={{ title: 'Data Rekening' }} />
          <Stack.Screen name="Persyaratan" component={PersyaratanScreen} options={{ title: 'Dokumen Persyaratan' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default RegistrationNavigator