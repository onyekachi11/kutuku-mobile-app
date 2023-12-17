import React from "react";
import { View, Pressable, Text, TouchableHighlight } from "react-native";

export default function Buttons({ name, onPress }) {
  return (
    <Pressable
      onPress={onPress}
    >
      {/* <TouchableHighlight underlayColor="white" onPress={onPress}> */}
      <View
        style={{
          padding: 20,
          backgroundColor: "#514eb7",
          borderRadius: 100,
          marginVertical: 20,
          width: "100%",
        }}
      >
        <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>
          {name}
        </Text>
      </View>
      {/* </TouchableHighlight> */}
    </Pressable>
  );
}

export function NoBgButtons({ name, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          marginVertical: 10,
          width: "100%",
        }}
      >
        <Text style={{ color: "#514eb7"}}>{name}</Text>
      </View>
    </Pressable>
  );
}
