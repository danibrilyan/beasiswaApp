/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import MultiProvider from "./App/Config/MultiProvider"
import AuthContextProvider from "./App/Context/AuthContext"
import UniversitasProvider from "./App/Context/UniversitasContext"
import DomisiliProvider from "./App/Context/DomisiliContext"
import AppNavigator from './App/Navigation/AppNavigation';

function App(){
  return(
    <MultiProvider providers={[
      <AuthContextProvider/>, 
      <UniversitasProvider/>,
      <DomisiliProvider/>
    ]}>
      <AppNavigator/>
    </MultiProvider>
  )
}

export default App;
