import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/AuthScreens/LoginScreen/LoginScreen";
import ForgotPasswordScreen from "../screens/AuthScreens/ForgotPasswordScreen/ForgotPasswordScreen";
import RegistrationScreen from "../screens/AuthScreens/RegistrationScreen/RegistrationScreen";

const Stack = createStackNavigator();

/* Before logged in screens */
const authRoutes = [
  { name: "SignIn", component: LoginScreen },
  { name: "SignUp", component: RegistrationScreen },

  { name: "ForgotPassword", component: ForgotPasswordScreen },
];

const AuthNavigator = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Login">
      {authRoutes.map((route) => {
        return <Stack.Screen key={route.name} {...route} />;
      })}
    </Stack.Navigator>
  );
};

export default AuthNavigator;