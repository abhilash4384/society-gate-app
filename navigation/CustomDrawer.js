import React from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { View, Image, TouchableOpacity, StyleSheet, Text } from "react-native";
import { CommonActions } from "@react-navigation/native";
import { MyText, Icon, Theme } from "../components";

const avatar = require("../assets/images/avatar.png");

const CustomDrawer = (props) => {
  const navigate = (path) => props.navigation.navigate(path);
  const navigateToHome = () => {
    props.navigation.closeDrawer();
    props.navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: "Home" }],
      })
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Image style={styles.avatar} source={avatar} />
              <View style={{ marginLeft: 15, marginTop: 15 }}>
                <MyText style={styles.title}>Abhilash Virat</MyText>
                <MyText style={styles.caption}>A 101</MyText>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.section}>
                <Text style={[styles.paragraph, styles.caption]}>
                  Consumer Id:
                </Text>
                <Text style={styles.caption}> SOCA101</Text>
              </View>
            </View>
          </View>

          <View style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  type="materialcommunityicons"
                  name="home"
                  color={color}
                  size={size}
                />
              )}
              label="Home"
              onPress={navigateToHome}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  type="materialcommunityicons"
                  name="contacts"
                  color={color}
                  size={size}
                />
              )}
              label="Directory"
              onPress={() => navigate("Directory")}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  type="materialcommunityicons"
                  name="headset"
                  color={color}
                  size={size}
                />
              )}
              label="Help Desk"
              onPress={() => navigate("HelpDesk")}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  type="materialcommunityicons"
                  name="message-bulleted"
                  color={color}
                  size={size}
                />
              )}
              label="Feedback"
              onPress={() => navigate("Feedback")}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  type="materialcommunityicons"
                  name="office-building"
                  color={color}
                  size={size}
                />
              )}
              label="My Society"
              onPress={() => navigate("MySociety")}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  type="materialcommunityicons"
                  name="account-details"
                  color={color}
                  size={size}
                />
              )}
              label="About Us"
              onPress={() => navigate("AboutUS")}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  type="materialcommunityicons"
                  name="lock"
                  color={color}
                  size={size}
                />
              )}
              label="Change Password"
              onPress={() => navigate("ChangePassword")}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  type="materialcommunityicons"
                  name="face"
                  color={color}
                  size={size}
                />
              )}
              label="Profile"
              onPress={() => navigate("Profile")}
            />
          </View>
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon
              type="materialcommunityicons"
              name="exit-to-app"
              color={color}
              size={size}
            />
          )}
          label="Sign Out"
          onPress={() => navigate("Logout")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    // borderWidth: 2,
    borderColor: "white",
    marginBottom: 10,
  },
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: Theme.grey,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    // fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
export default CustomDrawer;
