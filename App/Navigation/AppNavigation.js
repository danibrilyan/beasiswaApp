import React, {useContext} from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from '../Container/Account/SplashScreen';
//Screen Not Logged
import LoginScreen from '../Container/Account/LoginScreen';
import RegistrationScreen from '../Container/Registration/RegistrationScreen';
//Screen Logged
import HomeScreen from '../Container/Home/HomeScreen'
import RencanaStudiScreen from '../Container/RencanaStudi/RencanaStudiScreen';
import HasilStudiScreen from '../Container/HasilStudi/HasilStudiScreen';
import StudiAkhirScreen from '../Container/StudiAkhir/StudiAkhirScreen';
import AccountScreen from '../Container/Account/AccountScreen';
import { AuthContext } from '../Context/AuthContext';


const Stack = createStackNavigator();

function RegistrationNavigator(){
  return(
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen}  options={{ title: 'Verifikasi Beasiswa ANTAM' }}/>
      <Stack.Screen name="Registration" component={RegistrationScreen}  options={{ title: 'Pendaftaran Calon Peserta' }}/>        
    </Stack.Navigator>
  )
}

function MainNavigator(){
  return(
    <Stack.Navigator initialRouteName="Home" >
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Verifikasi Beasiswa ANTAM' }} />
      <Stack.Screen name="RencanaStudi" component={RencanaStudiScreen} options={{ title: 'Rencana Studi' }} />
      <Stack.Screen name="HasilStudi" component={HasilStudiScreen} options={{ title: 'Hasil Studi' }} />
      <Stack.Screen name="StudiAkhir" component={StudiAkhirScreen} options={{ title: 'Studi Akhir' }} />
      <Stack.Screen name="Akun" component={AccountScreen} />
    </Stack.Navigator>
  )
}

function AppNavigator() {
    const {auth, authdispatch} = useContext(AuthContext)
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} /> 
          <Stack.Screen name="MainNav" component={MainNavigator} />
          <Stack.Screen name="RegistrationNav" component={RegistrationNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default AppNavigator