import React from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from './HomeScreens/HomeScreen';
import SettingsScreen from './HomeScreens/SettingsScreen';
import MyOrder from './HomeScreens/MyOrder';
import Favorite from './HomeScreens/Favorite';
import { Icon } from "@rneui/themed";

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#514eb7",
        tabBarStyle: { height: "10%", paddingBottom: 20,},
        tabBarLabelStyle: {fontSize: 14}
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <Icon name="home" color={color} />,
        }}
      />
      <Tab.Screen
        name="My Order"
        component={MyOrder}
        options={{
          tabBarIcon: ({ color }) => <Icon name="list-alt" color={color} />,
        }}
      />
      <Tab.Screen
        name="My Favorite"
        component={Favorite}
        options={{
            tabBarLabel: 'Favorite' ,
          tabBarIcon: ({ color }) => <Icon name="favorite" color={color} />,
        }}
      />
      <Tab.Screen
        name="My Profile"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => <Icon name="person" color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default Home