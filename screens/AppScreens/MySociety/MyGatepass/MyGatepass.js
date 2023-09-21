import React, { useState } from "react";
import { View, Image, FlatList, Text } from "react-native";
import styles from "./styles";
import {
  Theme,
  Card,
  CardConatiner,
  CardHCenter,
  MyText,
  Icon,
} from "../../../../components";

const avatar = require("../../../../assets/images/avatar.png");

const MyGatepass = () => {
  const ListItem = ({ item }) => {
    return (
      <Card>
        <CardHCenter cardStyle={{ justifyContent: "space-between" }}>
          <CardHCenter cardStyle={{ justifyContent: "flex-start", padding: 5 }}>
            <Image style={styles.avatar} source={avatar} />
            <View>
              <MyText black textStyle={{ fontWeight: "bold" }}>
                {item % 2 === 0 ? "Abhilash Virat" : "Rahul Munde"}
              </MyText>
              {item % 2 === 0 && (
                <MyText
                  themeColor
                  textStyle={{ fontFamily: Theme.fontSecondary }}
                >
                  Scheduled
                </MyText>
              )}
              {item % 2 !== 0 && (
                <>
                  <MyText textStyle={{ fontFamily: Theme.fontSecondary }}>
                    In Time: <MyText grey textStyle={{ fontFamily: Theme.fontSecondary }}> 09:00PM 12th Apr 2020</MyText>
                  </MyText>
                  <MyText textStyle={{ fontFamily: Theme.fontSecondary }}>
                  Out Time: <MyText grey textStyle={{ fontFamily: Theme.fontSecondary }}>10:00PM 12th Apr 2020</MyText>
                  </MyText>
                </>
              )}
            </View>
          </CardHCenter>
          <Icon
            type="simplelineicons"
            name={item % 2 === 0 ? "call-in": "camrecorder" }
            size={20}
            iconColor={Theme.themeColor}
            style={{ marginRight: 10 }}
          />
        </CardHCenter>
      </Card>
    );
  };

  return (
    <CardConatiner>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
        renderItem={({ item }) => <ListItem item={item} />}
        keyExtractor={(item) => item.toString()}
      />
    </CardConatiner>
  );
};

export default MyGatepass;
