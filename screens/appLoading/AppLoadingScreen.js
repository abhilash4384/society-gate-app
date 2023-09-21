import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";
import { MyText } from "../../components";

const AppLoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} />
      <MyText grey>Hang in there</MyText>
      <MyText grey>fetching details...</MyText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AppLoadingScreen;