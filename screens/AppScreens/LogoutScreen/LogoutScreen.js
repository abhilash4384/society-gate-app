import React, { useState } from "react";
import { View, Image } from "react-native";
import styles from "./styles";
import {
  Theme,
  Card,
  CardConatiner,
  FloatingInput,
  Button,
  CardHCenter,
  MyText,
} from "../../../components";
import { AuthContext } from "../../../context/AuthContext";
import AuthHeaderSection from "../../../components/AuthHeaderSection/AuthHeaderSection";

const LogoutScreen = () => {
  const { deleteToken } = React.useContext(AuthContext);

  const signOutHandler = () => {
    deleteToken();
  };

  return (
    <CardConatiner cardStyle={{ justifyContent: "center",
    alignItems: "center",}}>
      <AuthHeaderSection />
      <CardHCenter>
        <View style={styles.rularStyle} />
        <MyText grey>Are you sure?</MyText>
        <View style={styles.rularStyle} />
      </CardHCenter>
      <CardHCenter cardStyle={[Theme.mt20]}>
        <Button
          rounded
          title="SIGN OUT"
          style={styles.btnStyle}
          onPress={signOutHandler}
        />
      </CardHCenter>
    </CardConatiner>
  );
};

export default LogoutScreen;
