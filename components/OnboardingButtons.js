import React from "react";
import { Text, View } from "react-native";
import Buttons, { NoBgButtons } from "./Buttons";
import { useNavigation } from "@react-navigation/native";

export default function OnboardingButtons({ title }) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: "100%",
        marginBottom: 60,
      }}
    >
      <Text
        style={{
          textAlign: "center",
        }}
      >
        {title}
      </Text>
      <Buttons
        name="Create Account"
        onPress={() => navigation.navigate("CreateAccount")}
      />
      <View style={{
        alignItems: 'center'
      }}>
        <NoBgButtons
          name="Already Have an Account?"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </View>
  );
}
