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
import Vehicle from "appscreens/MySociety/MyUnit/Vehicle/Vehicle";
import Members from "appscreens/MySociety/MyUnit/Members/Members";
import EmergancyContacts from "./EmergancyContacts/EmergancyContacts";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

const MembersWithSearch = (props) => {
  return <Members isLoadedFromDirectory={true} />;
};

const VehiclesWithSearch = (props) => {
  return <Vehicle isLoadedFromDirectory={true} />;
};

const Directory = (props) => {
  return (
    <Tab.Navigator tabBarOptions={{ scrollEnabled: true }}>
      <Tab.Screen name="MC Members" component={MembersWithSearch} />
      <Tab.Screen name="Members" component={MembersWithSearch} />
      <Tab.Screen name="Vehicles" component={VehiclesWithSearch} />
      <Tab.Screen name="Emergency" component={EmergancyContacts} />
    </Tab.Navigator>
  );
};

export default Directory;
