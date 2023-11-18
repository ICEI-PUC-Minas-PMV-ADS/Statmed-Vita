import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../screens/Home';
import HospitalHistory from '../screens/HospitalHistory';
import MyHealth from '../screens/MyHealth';
import Login from '../screens/Login';
import Register from '../screens/Register';
import MedicalConsultations from '../screens/MedicalConsultations';
import InfoConsulta from '../screens/InfoConsulta';
import AgendarConsulta from '../screens/AgendarConsulta';
import { useAuth } from '../context/AuthContext'; 

export default function TabScreens() {
  const Tab = createMaterialBottomTabNavigator()
  const { authState } = useAuth()
  return (
          <Tab.Navigator>
            { authState?.authenticated ? 
              (
                <>
                  <Tab.Screen
                    name="Minha Saude"
                    component={MyHealth}
                    options={{
                      tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="pill" color={color} size={26} />
                      ),
                    }}
                  />
                  <Tab.Screen
                    name="Consultas"
                    component={MedicalConsultations}
                    options={{
                      tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="clock-edit-outline" color={color} size={26} />
                      ),
                    }}
                  />
                  <Tab.Screen
                    name="HospitalHistory"
                    component={HospitalHistory}
                    options={{
                      tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="cog" color={color} size={26} />
                      ),
                    }}
                  />
                  <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                      tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                      ),
                    }}
                  />
                </>
              )
            : (
                <>
                  <Tab.Screen
                    name="Login"
                    component={Login}
                    options={{
                      tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                      ),
                    }}
                  />
                  <Tab.Screen
                    name="Register"
                    component={Register}
                    options={{
                      tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                      ),
                    }}
                  />
                </>
              )}
          </Tab.Navigator>
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
