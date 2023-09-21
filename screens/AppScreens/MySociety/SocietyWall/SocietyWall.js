import React, { useState } from "react";
import { View, Image, FlatList, Text } from "react-native";
import styles from "./styles";
import {
  Theme,
  Card,
  CardConatiner,
  CardHCenter,
  MyText,
} from "../../../../components";

const avatar = require("../../../../assets/images/avatar.png");

const SocietyWall = () => {
  const ListItem = ({ item }) => {
    return (
      <Card>
        <CardHCenter cardStyle={{ justifyContent: "space-between" }}>
          <CardHCenter cardStyle={{ justifyContent: "flex-start", padding: 5 }}>
            <Image style={styles.avatar} source={avatar} />
            <View>
              <MyText black textStyle={{ fontWeight: "bold" }}>
                Abhilash Virat
              </MyText>
              <MyText grey textStyle={{ fontFamily: Theme.fontSecondary }}>
                05:22PM 11th April 2020
              </MyText>
            </View>
          </CardHCenter>
          {item % 2 === 0 && (
            <MyText link textStyle={{ paddingRight: 10, marginTop: -25 }}>
              Announcement
            </MyText>
          )}

          {item % 2 !== 0 && (
            <MyText themeColor textStyle={{ paddingRight: 10, marginTop: -25 }}>
              Event
            </MyText>
          )}
        </CardHCenter>
        <CardHCenter
          cardStyle={{
            justifyContent: "flex-start",
            paddingTop: 10,
            paddingLeft: 5,
          }}
        >
          <MyText textStyle={{ fontWeight: "bold", fontSize: 16 }}>
            This should be considered as the heading
          </MyText>
        </CardHCenter>
        <CardHCenter>
          <MyText textStyle={styles.description}>
            Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum
            electram expetendis, omittam deseruisse consequuntur ius an,
          </MyText>
        </CardHCenter>
      </Card>
    );
  };

  return (
    <CardConatiner>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={({ item }) => <ListItem item={item} />}
        keyExtractor={(item) => item.toString()}
      />
    </CardConatiner>
  );
};

export default SocietyWall;
