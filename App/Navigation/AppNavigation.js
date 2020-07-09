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
import VerifikasiScreen from '../Container/Account/VerifikasiScreen';
import { AuthContext } from '../Context/AuthContext';
import ProfileScreen from '../Container/Registration/ProfileScreen';
import AkademikScreen from '../Container/Registration/AkademikScreen';
import RekeningScreen from '../Container/Registration/RekeningScreen';
import PersyaratanScreen from '../Container/Registration/PersyaratanScreen';
import VerifikasiTelpScreen from '../Container/Registration/VerifikasiTelpScreen';



const Stack = createStackNavigator();

function RegistrationNavigator(){
  return(
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen}  options={{ title: 'Verifikasi Beasiswa ANTAM' }}/>
      <Stack.Screen name="Profile" component={ProfileScreen}  options={{ title: 'Pendaftaran Calon Peserta' }}/> 
      <Stack.Screen name="Akademik" component={AkademikScreen}  options={{ title: 'Pendaftaran Calon Peserta' }}/> 
      <Stack.Screen name="Rekening" component={RekeningScreen}  options={{ title: 'Pendaftaran Calon Peserta' }}/> 
      <Stack.Screen name="Persyaratan" component={PersyaratanScreen}  options={{ title: 'Pendaftaran Calon Peserta' }}/> 
      <Stack.Screen name="Verifikasi" component={VerifikasiScreen}  options={{ title: 'Verifikasi OTP' }}/>   
      <Stack.Screen name="VerifikasiTelp" component={VerifikasiTelpScreen}  options={{ title: 'Register Telp' }}/>      
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
          <Stack.Screen name="RegistrationNavigator" component={RegistrationNavigator} />
          <Stack.Screen name="MainNavigator" component={MainNavigator} />
          
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default AppNavigator