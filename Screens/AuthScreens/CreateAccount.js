import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  Platform,
  View,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import Inputs from "../../components/Inputs";
import Buttons, { NoBgButtons } from "../../components/Buttons";

export default function CreateAccount() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          paddingHorizontal: 20,
        }}
      >
        {/* <StatusBar barStyle={'dark-content'} backgroundColor='white'/> */}
        <Text style={styles.pageHeader}>Create Account</Text>
        <Text style={styles.subTitle}>Create your new account</Text>
        <ScrollView>
          <Inputs
            label="Username"
            placeholder="Create your username"
            iconName="person-outline"
            value={username}
            setValue={setUsername}
          />
          <Inputs
            label="Email"
            placeholder="Create your username"
            iconName="mail-outline"
            keyboardType="email-address"
            value={email}
            setValue={setEmail}
          />
          <Inputs
            label="Password"
            placeholder="Create your username"
            iconName="lock-outline"
            secureTextEntry={true}
            value={password}
            setValue={setPassword}
          />
        </ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "padding"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 30}
        >
          <Buttons name=" Create Account" />
        </KeyboardAvoidingView>
        <Text style={[styles.subTitle, { textAlign: "center" }]}>
          Or Using other Method
        </Text>
        <View style={styles.authOptions}>
          <Text style={styles.authText}>Sign Up with Google</Text>
        </View>
        <View style={styles.authOptions}>
          <Text style={styles.authText}>Sign Up with Facebook</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS == "android" ? 20 : 0,
  },
  pageHeader: {
    color: "#181d31",
    fontSize: 25,
    fontWeight: "normal",
    marginBottom: 5,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 15,
    color: "#A7AEC1",
    marginBottom: 30,
  },
  authOptions: {
    borderWidth: 1,
    padding: 20,
    borderRadius: 100,
    marginBottom: 15,
  },
  authText: {
    textAlign: "center",
    color: "#181d31",
    fontWeight: "600",
    fontSize: 16,
  },
});
