import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import appJson from './app.json';
import { theme } from './src/styles/theme/v1/theme';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './src/screens/Home';
import HospitalHistory from './src/screens/HospitalHistory';
import MyHealth from './src/screens/MyHealth';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import MedicalConsultations from './src/screens/MedicalConsultations';
import InfoConsulta from './src/screens/InfoConsulta';
import AgendarConsulta from './src/screens/AgendarConsulta';
import { AuthProvider, useAuth } from './src/context/AuthContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabScreens from './src/navigation/TabScreens';

export default function App() {
  return (
    <AuthProvider>
      <Layout></Layout>
    </AuthProvider>
  );
}

function Layout() {
  const Tab = createMaterialBottomTabNavigator()
  const StackNavigator = createNativeStackNavigator();
  const { authState, onLogout } = useAuth()
  console.log('AUTH_STATE: ', authState?.authenticated)
  console.log('ON_LOGOUT: ', onLogout)
  return (
      <PaperProvider theme={theme}>
        <NavigationContainer> 
          <StackNavigator.Navigator screenOptions={{ headerTintColor: '#161616' ,headerStyle: { backgroundColor: '#36393E' } }}>
          <StackNavigator.Screen component={TabScreens} name="bottomTabBar" options={{ unmountOnBlur: true, headerShown: false }} />
          <StackNavigator.Screen
            component={InfoConsulta}
            name="Informações Consulta"
          />
          <StackNavigator.Screen
            component={AgendarConsulta}
            name="Agendar Consulta"
          />
          </StackNavigator.Navigator>
        </NavigationContainer>
      </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent(appJson.expo.name, () => App);