import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/Screens/Home'
import Login from './src/Screens/Login'
import SignUp from './src/Screens/SignUp'
import ForgetPassword from './src/Screens/ForgetPassword'

const Stack = createNativeStackNavigator()
export default function App() {
  return (
<NavigationContainer>
  <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
    <Stack.Screen name = "Home" component={Home}/>
    <Stack.Screen name = "Login" component={Login}/>
    <Stack.Screen name = "SignUp" component={SignUp}/>
    <Stack.Screen name = "ForgetPassword" component={ForgetPassword}/>
  </Stack.Navigator>
</NavigationContainer>
  )
}

const styles = StyleSheet.create({})