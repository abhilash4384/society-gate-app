import React, { useState } from "react";
import { View, Image } from "react-native";
import styles from "./styles";
import {
  Theme,
  Card,
  CardConatiner,
  CardHCenter,
  MyText,
  Button,
  IconText,
} from "../../../../components";

const avatar = require("../../../../assets/images/avatar.png");

const MyUnit = (props) => {

  const navigate = (path) => props.navigation.navigate(`${path}`);

  return (
    <CardConatiner cardStyle={Theme.pt10}>
      {/*  Button Container */}
      <Card>
        <CardHCenter cardStyle={styles.topCardStyle}>
          <Button
            vIcon={{
              name: "users",
              ...styles.btnIconStyle,
            }}
            textStyle={styles.topBtnTxtStyle}
            title="Members"
            transparent
            onPress={() => navigate("Members")}
          />
          <View style={styles.vRularStyle} />
          <Button
            vIcon={{
              name: "car",
              ...styles.btnIconStyle,
            }}
            textStyle={styles.topBtnTxtStyle}
            title="Vehicles"
            transparent
            onPress={() => navigate("Vehicle")}
          />
          <View style={styles.vRularStyle} />
          <Button
            vIcon={{
              name: "briefcase",
              ...styles.btnIconStyle,
            }}
            textStyle={styles.topBtnTxtStyle}
            title="Staff"
            transparent
            onPress={() => navigate("Staff")}
          />
        </CardHCenter>
      </Card>
      {/* End Button Container */}

      {/* Body Container */}
      <Card>
        <CardHCenter cardStyle={styles.primaryCardStyle}>
          <CardHCenter>
            <Image style={styles.avatar} source={avatar} />
            <MyText>My Account</MyText>
          </CardHCenter>
          <MyText textStyle={{ fontFamily: Theme.fontSecondary }}>
            Due Date: 4th Sept 2020
          </MyText>
        </CardHCenter>

        <CardHCenter cardStyle={Theme.p5}>
          <MyText textStyle={styles.amountTxtStyle}>₹ 99</MyText>
        </CardHCenter>
        <CardHCenter cardStyle={Theme.p5}>
          <View style={styles.rularStyle} />
        </CardHCenter>

        <CardHCenter cardStyle={styles.btnContainer}>
          <Button
            transparent
            textStyle={styles.btnStyle}
            title="Account History"
          />
          <Button transparent textStyle={styles.btnStyle} title="Pay Now" />
        </CardHCenter>
      </Card>
      {/* End Body Container */}
    </CardConatiner>
  );
};

export default MyUnit;
