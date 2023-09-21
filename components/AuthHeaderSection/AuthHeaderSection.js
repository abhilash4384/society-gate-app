import * as React from "react";
import { View, Image, StyleSheet } from "react-native";

const AuthHeaderSection = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/building.jpg")}
        style={styles.imgStyle}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  imgStyle: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
});

export default AuthHeaderSection;
