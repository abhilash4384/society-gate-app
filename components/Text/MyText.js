import * as React from "react";
import { Text } from "react-native";
import Theme from "../Theme";

export const MyText = (props) => {
  const inputStyle = {
    fontSize: Theme.fontSize,
    fontFamily: Theme.font,
    color: Theme.black,
  };

  if (props.grey) inputStyle.color = Theme.grey;
  else if (props.primary) inputStyle.color = Theme.primary;
  else if (props.success) inputStyle.color = Theme.success;
  else if (props.info) inputStyle.color = Theme.info;
  else if (props.link) inputStyle.color = Theme.link;
  else if (props.warning) inputStyle.color = Theme.warning;
  else if (props.danger) inputStyle.color = Theme.danger;
  else if (props.white) inputStyle.color = Theme.white;
  else if (props.themeColor) inputStyle.color = Theme.themeColor;

  return (
    <Text
      {...props}
      style={[
        inputStyle,
        props.textStyle,
      ]}
    />
  );
};
