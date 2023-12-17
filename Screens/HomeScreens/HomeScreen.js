import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Platform,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import PagerView from "react-native-pager-view";
import { Icon } from "@rneui/themed";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Favorite from "./Favorite";
import MyOrder from "./MyOrder";
import HomeFirstTab from "./HomeFirstTab";
import CategoryTab from "./CategoryTab";
import { useNavigation } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.heading}>
        <View style={styles.user}>
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              backgroundColor: "rgba(0,0,0,0.1)",
              padding: 6,
            }}
          >
            <Image
              source={require("../../assets/userImg.jpg")}
              style={{ width: "100%", height: "100%", borderRadius: 100 }}
            />
          </View>
          <View>
            <Text style={styles.username}>Hi, Jonathan</Text>
            <Text style={styles.subtitle}>Lets go Shopping</Text>
          </View>
        </View>
        <View style={styles.icons}>
          <Pressable onPress={() => navigation.navigate("SearchPage")}>
            <Icon name="search" size={30} />
          </Pressable>
          <Pressable>
            <Icon name="notifications" size={30} />
          </Pressable>
        </View>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#474a59",
        }}
      >
        <Tab.Screen
          name="HomeTab"
          options={{
            tabBarLabel: "Home",
          }}
          component={HomeFirstTab}
        />
        <Tab.Screen name="Category" component={CategoryTab} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 20 : 0,
    flex: 1,
    backgroundColor: "white",
  },
  pagerView: {
    flex: 1,
  },
  heading: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    marginTop: 40,
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  icons: {
    flexDirection: "row",
    gap: 10,
    fontSize: 20,
  },
  username: {
    fontSize: 20,
    color: "#181d31",
    marginBottom: 3,
  },
  subtitle: {
    fontSize: 11,
    color: "#A7AEC1",
  },
});

export default HomeScreen;
