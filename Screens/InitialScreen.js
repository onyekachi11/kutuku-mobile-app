import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function InitialScreen() {
  const navigation = useNavigation();

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
      setTimeout(()=>{
          navigation.navigate('Onboarding')
      }, 3000)
  }, []);

  return (
    <View style={styles.container}>
        <Text style={styles.logo}>Kutuku</Text>
        <Text style={styles.subText}>Any Shopping from Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#514eb7",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },
  subText: {
    fontSize: 19,
    fontWeight: "300",
    color: "white",
  },
});
