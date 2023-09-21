import * as React from "react";
import { View, } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Theme from "../Theme";

export const CardConatiner = (props) => {
  return (
    <View
      {...props}
      style={[props.cardStyle, { flex: 1, backgroundColor: Theme.white }]}
    />
  );
};

export const Card = (props) => {
  return (
    <View
      {...props}
      style={[
        props.cardStyle,
        {
          backgroundColor: Theme.white,
          borderRadius: 4,
          margin: 8,
          padding: 5,
          elevation: 5,
          shadowColor: Theme.grey,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 2,
        },
      ]}
    />
  );
};

export const CardHCenter = (props) => {
  //horizantally center
  return (
    <View
    {...props}
      style={[
          {
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            },
            props.cardStyle
      ]}
    ></View>
  );
};

export const CardVCenter = (props) => {
  //Vertically center
  return (
    <View
      style={[
        { justifyContent: "center", backgroundColor: Theme.white },
        props.cardStyle,
      ]}
      {...props}
    />
  );
};

export const KeyboardView = (props) => {
  return (
    <KeyboardAwareScrollView
      style={[
        { flex: 1, backgroundColor: Theme.white },
        props.cardStyle,
      ]}
      {...props}
    />
  );
};

