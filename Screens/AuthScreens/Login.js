import React, {
  useState,
  useRef,
  useMemo,
  forwardRef,
  useImperativeHandle,
  useCallback,
} from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  Platform,
  View,
  TextInput,
  ScrollView,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";
import Inputs from "../../components/Inputs";
import Buttons, { NoBgButtons } from "../../components/Buttons";
import CustomBottomSheet from "../../components/CustomBottomSheet";
import {
  BottomSheetModalProvider,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLoader, setShowLoader] = useState(false);

  const bottomSheetRef = useRef(null);

  const navigation = useNavigation();

  const handlePresentModalPress = useCallback(() => {
    bottomSheetRef.current.present();
  }, []);

  const handlle = useCallback((index) => {
    bottomSheetRef.current?.snapToIndex(index);
  }, []);

  const nextPage = () => {
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
      navigation.navigate("HomeContainer");
    }, 3000);
  };

  return (
    <>
      {showLoader && (
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            // position: "absolute",
            borderWidth: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            zIndex: 50,
          }}
        >
          <ActivityIndicator size="large" color="#514eb7" />
        </View>
      )}
      <SafeAreaView style={styles.container}>
        <View
          style={{
            paddingHorizontal: 20,
          }}
        >
          {/* <StatusBar barStyle={'dark-content'} backgroundColor='white'/> */}
          <Text style={styles.pageHeader}>Login Account</Text>
          <Text style={styles.subTitle}>
            Please login with registered account
          </Text>
          <ScrollView>
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

          <View
            style={{
              alignItems: "flex-end",
            }}
          >
            <NoBgButtons
              name="Forgot Password?"
              onPress={handlePresentModalPress}
            />
          </View>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            // keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
          >
            <Buttons name=" Create Account" onPress={nextPage} />
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
      <CustomBottomSheet ref={bottomSheetRef}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "height" : "padding"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 100}
        >
          <View style={styles.container}>
            <Text style={styles.pageHeader}>Forgot Password</Text>
            <Text style={styles.subTitle}>Enter your email Address</Text>
            <Inputs
              label="Email"
              placeholder="Enter emaill address"
              iconName="mail-outline"
            />
            <Buttons
              name="Send Code"
              onPress={() => (console.log("handleSheetChanges"), handlle(2))}
            />
          </View>
        </KeyboardAvoidingView>
      </CustomBottomSheet>
    </>
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
