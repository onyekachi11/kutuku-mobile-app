import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CreateAccount from '../Screens/AuthScreens/CreateAccount'
import OnboardingScreen from '../Screens/OnboardingScreen'
import InitialScreen from '../Screens/InitialScreen'
import Login from '../Screens/AuthScreens/Login'
import Home from '../Screens/Home'
import SearchPage from '../Screens/HomeScreens/SearchPage'

const Stack = createNativeStackNavigator()


export default function AppNavigations() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='InitialScreen'>
            <Stack.Screen name='InitialScreen' options={{headerShown: false}} component={InitialScreen}/>
            <Stack.Screen name='Onboarding' options={{headerShown: false}} component={OnboardingScreen}/>
            <Stack.Screen name='CreateAccount' options={{headerShown: false}} component={CreateAccount}/>
            <Stack.Screen name='Login' options={{headerShown: false}} component={Login}/>
            <Stack.Screen name='HomeContainer' options={{headerShown: false}} component={Home}/>
            <Stack.Screen name='SearchPage' options={{headerShown: false}} component={SearchPage}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}
