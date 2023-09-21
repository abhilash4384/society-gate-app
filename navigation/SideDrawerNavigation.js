import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Theme,
  Icon,
  IconText,
  MyText,
  Button,
  ButtonIcon,
} from "../components";
import styles from "./styles";
import SideDrawerButton from "./SideDrawerButton";
import SideLogoutButton from "./SideLogoutButton";
import CustomDrawer from "./CustomDrawer";

import Home from "../screens/Home";
import LogoutScreen from "appscreens/LogoutScreen/LogoutScreen";
import Profile from "appscreens/Profile/Profile";
import EditProfile from "appscreens/Profile/EditProfile/EditProfile";
import MyScociety from "appscreens/MySociety/MySociety";
import Feedback from "appscreens/Feedback/Feedback";

import Members from "appscreens/MySociety/MyUnit/Members/Members";
import AddMember from "appscreens/MySociety/MyUnit/Members/AddMember/AddMember";
import Vehicle from "appscreens/MySociety/MyUnit/Vehicle/Vehicle";
import AddVehicle from "appscreens/MySociety/MyUnit/Vehicle/AddVehicle/AddVehicle";
import Staff from "appscreens/MySociety/MyUnit/Staff/Staff";
import AddStaff from "appscreens/MySociety/MyUnit/Staff/AddStaff/AddStaff";
import AboutUS from "appscreens/AboutUS/AboutUS";
import ChangePassword from "appscreens/ChangePassword/ChangePassword";
import HelpDesk from "appscreens/HelpDesk/HelpDesk";
import AddIssue from "appscreens/HelpDesk/AddIssue/AddIssue";
import Directory from "appscreens/Directory/Directory";

import TestTemplate from "../screens/TestTemplate/TestTemplate";
//Test Screen
import UnderConstruction from "../screens/UnderConstruction/UnderConstruction";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Main App routes

export const MaintNavigator = (props) => {
  return (
    <Stack.Navigator
      screenOptions={styles.appStackScreenOptions}
      initialRouteName="Home"
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerRight: () => <SideLogoutButton {...props} /> }}
      />
      <Stack.Screen
        name="NA"
        component={UnderConstruction}
        options={{
          headerTitle: "Under Construction",
          headerRight: () => <SideDrawerButton {...props} />,
        }}
      />
      <Stack.Screen
        name="Logout"
        component={LogoutScreen}
        options={{
          headerTitle: "Logout",
          headerRight: () => <SideDrawerButton {...props} />,
        }}
      />
      <Stack.Screen
        name="Directory"
        component={Directory}
        options={{
          headerTitle: "Directory",
          headerRight: () => <SideDrawerButton {...props} />,
        }}
      />
      <Stack.Screen
        name="MySociety"
        component={MyScociety}
        options={{
          headerTitle: "My Society",
          headerRight: () => <SideDrawerButton {...props} />,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: "Profile",
          headerRight: () => <SideDrawerButton {...props} />,
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerTitle: "Edit Profile",
          headerRight: () => <SideDrawerButton {...props} />,
        }}
      />
      <Stack.Screen
        name="HelpDesk"
        component={HelpDesk}
        options={{
          headerTitle: "Help Desk",
          headerRight: () => <SideDrawerButton {...props} />,
        }}
      />

      <Stack.Screen
        name="AddIssue"
        component={AddIssue}
        options={{
          headerTitle: "Add Issue",
          headerRight: () => <SideDrawerButton {...props} />,
        }}
      />
      <Stack.Screen
        name="Feedback"
        component={Feedback}
        options={{
          headerTitle: "Feedback",
          headerRight: () => <SideDrawerButton {...props} />,
        }}
      />
      <Stack.Screen
        name="Members"
        component={Members}
        options={{
          headerTitle: "Members",
          headerRight: () => <SideDrawerButton {...props} />,
        }}
      />
      <Stack.Screen
        name="AddMember"
        component={AddMember}
        options={{
          headerTitle: "Add Member",
          headerRight: () => <SideDrawerButton {...props} />,
        }}
      />
      <Stack.Screen
        name="Vehicle"
        component={Vehicle}
        options={{
          headerTitle: "Vehicle",
          headerRight: () => <SideDrawerButton {...props} />,
        }}
      />
      <Stack.Screen
        name="AddVehicle"
        component={AddVehicle}
        options={{
          headerTitle: "Add Vehicle",
          headerRight: () => <SideDrawerButton {...props} />,
        }}
      />
      <Stack.Screen
        name="Staff"
        component={Staff}
        options={{
          headerTitle: "Staff",
          headerRight: () => <SideDrawerButton {...props} />,
        }}
      />
      <Stack.Screen
        name="AddStaff"
        component={AddStaff}
        options={{
          headerTitle: "Add Staff",
          headerRight: () => <SideDrawerButton {...props} />,
        }}
      />
      <Stack.Screen
        name="Test"
        component={TestTemplate}
        options={{
          headerTitle: "Test",
          headerRight: () => <SideDrawerButton {...props} />,
        }}
      />
      <Stack.Screen
        name="AboutUS"
        component={AboutUS}
        options={{
          headerTitle: "About Us",
          headerRight: () => <SideDrawerButton {...props} />,
        }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          headerTitle: "Change Password",
          headerRight: () => <SideDrawerButton {...props} />,
        }}
      />
    </Stack.Navigator>
  );
};

export const SideDrawerNavigation = () => {
  return (
    <Drawer.Navigator
      tabBarOptions={styles.labelStyle}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Main" component={MaintNavigator} />
    </Drawer.Navigator>
  );
};

export default SideDrawerNavigation;
