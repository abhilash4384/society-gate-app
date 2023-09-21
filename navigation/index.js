import React from "react";

// screens
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";


const AppNavigation = (props) => {
  console.log(props, "props")
  let isLoggedIn = props.userToken && props.userToken !== "";
  if (isLoggedIn) return <AppNavigator />;
  else return <AuthNavigator />;
};

export default AppNavigation;
