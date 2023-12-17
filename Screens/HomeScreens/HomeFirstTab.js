// import React from "react";
// import { View, Text } from "react-native";
// import PagerView, { PagerDotIndicator } from "react-native-pager-view";

// const HomeFirstTab = () => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: "white",
//       }}
//     >
//       <PagerView
//         initialPage={0}
//         style={{
//           height: 200,
//           backgroundColor: "rgba(0,0,0,0.1)",
//           margin: 20,
//           borderRadius: 20,
//         }}
//       >
//         <View
//           key="1"
//           style={{ alignItems: "center", justifyContent: "center" }}
//         >
//           <Text
//             style={{
//               fontSize: 25,
//               textAlign: "center",
//               paddingHorizontal: 50,
//               marginBottom: 10,
//               fontWeight: "500",
//             }}
//           >
//             24% off shipping today on bag Purchase
//           </Text>
//           <Text
//             style={{
//               fontSize: 15,
//               textAlign: "center",
//               color: "rgba(0,0,0,0.4)",
//             }}
//           >
//             By Kutuku Stores
//           </Text>
//         </View>
// <View
//   key="2"
//   style={{ alignItems: "center", justifyContent: "center" }}
// >
//   <Text
//     style={{
//       fontSize: 25,
//       textAlign: "center",
//       paddingHorizontal: 50,
//       marginBottom: 10,
//       fontWeight: "400",
//     }}
//   >
//     54% off shipping today on bag Purchase
//   </Text>
//   <Text
//     style={{
//       fontSize: 15,
//       textAlign: "center",
//       color: "rgba(0,0,0,0.4)",
//     }}
//   >
//     By Kutuku Stores
//   </Text>
// </View>
//       </PagerView>
//     </View>
//   );
// };

// export default HomeFirstTab;

import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";
import Swiper from "react-native-swiper";
import { NoBgButtons } from "../../components/Buttons";
import Card from "../../components/Card";

const HomeFirstTab = () => {
  const slideText = [
    { text: " 14% off shipping today on bag Purchase" },
    { text: " 44% off shipping today on bag Purchase" },
    { text: " 74% off shipping today on bag Purchase" },
  ];
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ height: 240 }}>
        <Swiper
          style={{
            // backgroundColor: "rgba(0,0,0,0.1)",
            justifyContent: "center",
            alignItems: "center",
          }}
          showsButtons={false}
          showsPagination={true}
          dotStyle={{ backgroundColor: "rgba(0,0,0,0.2)", width: 8, height: 8 }}
          activeDotStyle={{ backgroundColor: "#514eb7", width: 8, height: 8 }}
        >
          {slideText.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  flex: 1,
                }}
              >
                <View
                  style={{
                    borderRadius: 8,
                    paddingVertical: 40,
                    backgroundColor: "rgba(0,0,0,0.1)",
                    marginBottom: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 25,
                      textAlign: "center",
                      paddingHorizontal: 40,
                      marginBottom: 10,
                      // borderWidth: 2,
                      fontWeight: "400",
                    }}
                  >
                    {item.text}
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      textAlign: "center",
                      color: "rgba(0,0,0,0.4)",
                    }}
                  >
                    By Kutuku Stores
                  </Text>
                </View>
              </View>
            );
          })}
        </Swiper>
      </View>

      <View style={{ paddingHorizontal: 20 }}>
        <View style={styles.newArrivalsHeading}>
          <Text style={styles.newArrivalsText}> New Arrivals</Text>
          <NoBgButtons name="See All" />
        </View>
        <View style={{flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between', gap: 5 }}>
          <Card />
          <Card />
          <Card />
          <Card />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeFirstTab;

const styles = StyleSheet.create({
  newArrivalsHeading: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  newArrivalsText: {
    fontSize: 20,
    color: "#181d31",
    fontWeight: "500",
  },
});
