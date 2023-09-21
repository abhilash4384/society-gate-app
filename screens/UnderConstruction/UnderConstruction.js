import React, { useState } from "react";
import { View, Image } from "react-native";
import styles from "./styles";
import {
  CardConatiner,
  CardHCenter,
  MyText,
} from "../../components";
import AuthHeaderSection from "../../components/AuthHeaderSection/AuthHeaderSection";

const UnderConstruction = () => {
  return (
    <CardConatiner
      cardStyle={{ justifyContent: "center", alignItems: "center" }}
    >
      <AuthHeaderSection />
      <CardHCenter>
        <MyText grey>Sorry for the inconvenience!</MyText>
      </CardHCenter>
      <CardHCenter>
        <View style={styles.rularStyle} />
        <MyText grey>This page is Under Construction</MyText>
        <View style={styles.rularStyle} />
      </CardHCenter>
    </CardConatiner>
  );
};

export default UnderConstruction;
