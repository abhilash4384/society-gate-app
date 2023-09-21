import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  Linking,
} from "react-native";
import {
  Theme,
  CardConatiner,
  Button,
  CardHCenter,
  MyText,
  wp,
  hp,
} from "../../../components";
import AboutUS from "appscreens/AboutUS/AboutUS";
import IssueListing from "./IssueListing/IssueListing";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

const HelpDesk = (props) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        initialParams={{ issueType: "open" }}
        name="OPEN ISSUES"
        component={IssueListing}
      />
      <Tab.Screen
        initialParams={{ issueType: "resolved" }}
        name="RESOLVED ISSUES"
        component={IssueListing}
      />
    </Tab.Navigator>
  );
};

export default HelpDesk;
