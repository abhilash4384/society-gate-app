import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Theme } from "../components";
import styles from "./styles";
import { createStackNavigator } from "@react-navigation/stack";
import SideDrawerNavigation from "./SideDrawerNavigation";

// const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={styles.appStackScreenOptions}
      initialRouteName="SocietyRun"
    >
      <Stack.Screen
        name="SocietyRun"
        component={SideDrawerNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
