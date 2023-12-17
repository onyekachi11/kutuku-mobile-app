import React from 'react'
import { Text, View } from 'react-native';
import Swiper from "react-native-swiper";

const SwiperComponent = ({data}) => {
  return (
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
      {data.map((item, index) => {
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
  );
}

export default SwiperComponent