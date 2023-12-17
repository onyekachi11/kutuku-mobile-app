import React, { useState} from "react";
import { Text, TextInput, View, StyleSheet , KeyboardAvoidingView} from "react-native";
import { Icon } from "@rneui/themed";

export default function Inputs({
  label,
  placeholder,
  iconName,
  secureTextEntry,
  keyboardType,
  value,
  setValue,
}) {

  const [highLightColor, setHighLightColor] = useState(false)

  const styles = StyleSheet.create({
    label: {
      color: "#181d31",
      fontSize: 20,
      marginBottom: 10,
      fontWeight: "normal",
    },
    inputContainer: {
      borderColor: highLightColor ? "#514eb7" : "",
      borderWidth: highLightColor? 1 : 0,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 20,
      paddingVertical: 10,
      gap: 20,
      borderRadius: 15,
      backgroundColor: highLightColor ? "white" : "#f5f5f5",
      justifyContent: 'space-between'
    },
    textInput: {
      height: 40,
      width: "100%",
    },
  });
  
  return (
    <View
      style={{
        marginBottom: 20,
      }}
    >
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <Icon name={iconName} color={highLightColor ? "#514eb7" : "#ACB3C5"} />
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          value={value}
          onChange={setValue}
          autoCorrect={false}
          autoCapitalize="none"
          onFocus={() => setHighLightColor(true)}
          onBlur={() => setHighLightColor(false)}
        />
        <Icon name={iconName} color={highLightColor ? "#514eb7" : "#ACB3C5"} />
      </View>
    </View>
  );
}


