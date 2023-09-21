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
  hp
} from "../../../components";
import * as WebBrowser from "expo-web-browser";
import { ScrollView } from 'react-native-gesture-handler';

import styles from "./styles";
const bannerImg = require("../../../assets/images/AboutUS.png");
const AboutUS = (props) => {
  const navigate = (path) => props.navigation.navigate(`${path}`);
  const openWebsite = () =>
    WebBrowser.openBrowserAsync("https://reactnavigation.org");

  const dialCall = (phone) => {
    let phoneNumber = "";
    if (Platform.OS === "android") {
      phoneNumber = "tel:${" + phone + "}";
    } else {
      phoneNumber = "telprompt:${" + phone + "}";
    }
    Linking.openURL(phoneNumber);
  };

  return (
    <CardConatiner cardStyle={{ backgroundColor: Theme.themeColor }}>
        <View style={styles.bannerContainer}>
          <Image style={styles.banner} source={bannerImg} />
        </View>
      <ScrollView style={Theme.flex1}>
        <View style={styles.section}>
          <View style={styles.row}>
            <MyText textStyle={styles.title}>Company</MyText>
          </View>
          <View grey style={styles.row}>
            <MyText grey textStyle={styles.body}>
              ABC Solutions Pvt Ltd
            </MyText>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.row}>
            <MyText textStyle={styles.title}>Contact</MyText>
          </View>
          <View style={styles.row}>
            <MyText grey textStyle={styles.body}>
              Sales Contact:{" "}
            </MyText>
            <TouchableOpacity onPress={() => dialCall("+91888888888")}>
              <MyText link textStyle={styles.body}>
                +91 888888888
              </MyText>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <MyText grey textStyle={styles.body}>
              Support Contact:{" "}
            </MyText>
            <TouchableOpacity onPress={() => dialCall("02026625642")}>
              <MyText link textStyle={styles.body}>
                020 26625642
              </MyText>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.row}>
            <MyText textStyle={styles.title}>Website</MyText>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={openWebsite}>
              <MyText link textStyle={styles.body}>
                https://reactnavigation.org
              </MyText>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.row}>
            <MyText textStyle={styles.title}>Address</MyText>
          </View>
          <View style={styles.row}>
            <MyText grey textStyle={styles.body}>
              Lorum Ipsum
            </MyText>
          </View>
          <View style={styles.row}>
            <MyText grey textStyle={styles.body}>
              123 Dummy Road, Dummy City
            </MyText>
          </View>
          <View style={styles.row}>
            <MyText grey textStyle={styles.body}>
              Zip: 432100
            </MyText>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.row}>
            <MyText textStyle={styles.title}>Version Code</MyText>
          </View>
          <View style={styles.row}>
            <MyText grey textStyle={styles.body}>
              44
            </MyText>
          </View>
        </View>
      </ScrollView>
    </CardConatiner>
  );
};

export default AboutUS;
