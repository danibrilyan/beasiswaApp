import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
 
// import MainTabNavigator from './MainTabNavigator'
import HomeScreen from '../Container/Home/HomeScreen'
import RencanaStudiScreen from '../Container/RencanaStudi/RencanaStudiScreen';
import HasilStudiScreen from '../Container/HasilStudi/HasilStudiScreen';
import StudiAkhirScreen from '../Container/StudiAkhir/StudiAkhirScreen';
import AccountScreen from '../Container/Account/AccountScreen';

const Stack = createStackNavigator();

function MainNavigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Verifikasi Beasiswa ANTAM' }} />
          <Stack.Screen name="RencanaStudi" component={RencanaStudiScreen} options={{ title: 'Rencana Studi' }} />
          <Stack.Screen name="HasilStudi" component={HasilStudiScreen} options={{ title: 'Hasil Studi' }} />
          <Stack.Screen name="StudiAkhir" component={StudiAkhirScreen} options={{ title: 'Studi Akhir' }} />
          <Stack.Screen name="Akun" component={AccountScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default MainNavigator