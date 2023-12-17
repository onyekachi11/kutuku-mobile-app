import { Icon } from '@rneui/themed';
import React, {useState} from 'react'
import { ImageBackground, View, Text, StyleSheet } from 'react-native';

const Card = () => {

    const [liked, setLiked] = useState(true)
  return (
    <View style={{ width: "45%" }}>
      <ImageBackground
        source={require("../assets/bag2.jpg")}
        resizeMode="cover"
        style={{ height: 200, borderRadius: 10, overflow: "hidden" }}
      >
        <View style={{ alignItems: "flex-end", padding: 5 }}>
          {/* <Text>Hello</Text> */}
          <Icon name="favorite" color={liked ? "red" : "rgba(255,255,255,1)"} />
        </View>
      </ImageBackground>
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>The Mirac Jiz</Text>
        <Text style={styles.itemOwner}>Lisa Robber</Text>
        <Text>$195.00</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  itemDetails: {
    alignItems: "center",
    gap: 8,
    paddingVertical: 10,
  },
  itemName: {
    fontSize: 20,
    fontWeight: "500",
  },
  itemOwner: {
    fontSize: 14,
    color: "rgba(0,0,0, 0.2)",
  },
});
export default Card