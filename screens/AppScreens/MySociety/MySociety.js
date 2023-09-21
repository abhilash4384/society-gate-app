import React, { useState } from "react";
import { View, Image } from "react-native";
import styles from "./styles";
import { Theme, IconText } from "../../../components";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import UnderConstruction from "../../UnderConstruction/UnderConstruction";
import SocietyWall from "./SocietyWall/SocietyWall";
import MyGatepass from "./MyGatepass/MyGatepass";
import MyUnit from "./MyUnit/MyUnit";

const TopTab = createMaterialTopTabNavigator();

//MY society top bar

const mySocietyRotes = [
  {
    name: "Society Wall",
    component: SocietyWall,
    options: {
      tabBarLabel: ({ focused }) => (
        <IconText focused={focused}>Society Wall</IconText>
      ),
    },
  },
  {
    name: "My Gatepass",
    component: MyGatepass,
    options: {
      tabBarLabel: ({ focused }) => (
        <IconText focused={focused}>My Gatepass</IconText>
      ),
    },
  },
  {
    name: "My Unit",
    component: MyUnit,
    options: {
      tabBarLabel: ({ focused }) => (
        <IconText focused={focused}>My Unit</IconText>
      ),
    },
  },
];

const MySociety = () => {
  return (
    <TopTab.Navigator tabBarOptions={styles.tabBarOptionStyle}>
      {mySocietyRotes.map((route) => {
        return <TopTab.Screen key={route.name} {...route} />;
      })}
    </TopTab.Navigator>
  );
};

export default MySociety;
