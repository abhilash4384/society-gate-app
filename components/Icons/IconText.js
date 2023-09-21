import * as React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import Theme from "../Theme";

export const IconText = (props) => {
  const customStyle = {
    color: props.focused ? Theme.tabIconSelected : Theme.tabIconDefault,
    fontSize: 11,
    paddingBottom: 2,
    fontFamily: Theme.fontSecondary,
    ...props.customStyle,
  };
  return <Text {...props} style={customStyle} />;
};


