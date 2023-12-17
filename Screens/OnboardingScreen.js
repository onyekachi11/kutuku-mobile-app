import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Button,
} from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import Buttons, { NoBgButtons } from "../components/Buttons";
import OnboardingButtons from "../components/OnboardingButtons";

const { width, height } = Dimensions.get("window");

export default function OnboardingScreen() {
  const navigation = useNavigation();

  const handleDone = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        bottomBarHighlight={false}
        imageContainerStyles={{
          paddingBottom: 0,
        }}
        onSkip={handleDone}
        showDone={false}
        showNext={false}
        showSkip={false}
        containerStyles={{
          paddingHorizontal: 30,
        }}
        pages={[
          {
            backgroundColor: "white",
            title: "Various Collections of The Latest Products",
            image: (
              <View>
                <LottieView
                  style={styles.lottie}
                  source={require("../assets/animations/Animation.json")}
                  loop
                  autoPlay
                />
              </View>
            ),
            titleStyles: {
              color: "#181d31",
              fontSize: 26,
              fontWeight: "bold",
            },
            subtitle: (
              <OnboardingButtons title="Various Collections of The Latest Products at your door" />
            ),
          },
          {
            backgroundColor: "white",
            image: (
              <View>
                <LottieView
                  style={styles.lottie}
                  source={require("../assets/animations/Animation.json")}
                  loop
                  autoPlay
                />
              </View>
            ),
            title: "Complete Collection of Colors and Sizes",
            titleStyles: {
              color: "#181d31",
              fontSize: 26,
              fontWeight: "bold",
            },
            subtitle: (
              <OnboardingButtons title="Complete Collection of Colors and Sizes at your door" />
            ),
          },
          {
            backgroundColor: "white",
            image: (
              <View>
                <LottieView
                  style={styles.lottie}
                  source={require("../assets/animations/Animation.json")}
                  loop
                  autoPlay
                />
              </View>
            ),
            title: "Find The Most Suitable Outfit for you",
            titleStyles: {
              color: "#181d31",
              fontSize: 26,
              fontWeight: "bold",
            },
            subtitle: (
              <OnboardingButtons title="Most Suitable Outfit for you" />
            ),
   
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  lottie: {
    width: width * 0.9,
    height: width,
  },
  doneButton: {
    backgroundColor: "#181d31",
    padding: 30,
  },
});
