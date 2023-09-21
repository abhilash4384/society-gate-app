import * as React from "react";
import { Dropdown } from "react-native-material-dropdown";
import { StyleSheet, TextInput } from "react-native";
import Theme from "../Theme";
import FloatingLabel from "react-native-floating-labels";
import { MyText } from "../Text/MyText";

export const CustomDropdown = (props) => {
  // Refrance
  // https://www.npmjs.com/package/react-native-material-dropdown
  return (
    <>
      <Dropdown
        label={props.label}
        baseColor={props.labelColor ? props.labelColor : Theme.themeColor}
        pickerStyle={{ borderBottomWidth: 0 }}
        containerStyle={[styles.containerStyle, { ...props.containerStyle }]}
        data={props.data}
        inputContainerStyle={[styles.inputContainerStyle, { ...props.inputContainerStyle }]}
        textColor={props.textColor ? props.textColor : Theme.black}
        labelTextStyle={[styles.labelStyle, { ...props.labelStyle }]}
        valueExtractor={props.valueExtractor}
        labelExtractor={props.labelExtractor}
        onChangeText={props.onChangeText}
      />
      {props.error !== "" && (
        <MyText textStyle={{ alignSelf: "center" }} danger>
          {props.error}
        </MyText>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  labelStyle: {
    padding: 0,
    paddingLeft: 7,
    fontFamily: Theme.font,
  },
  inputStyle: {
    borderWidth: 0,
  },
  containerStyle: {
    borderBottomWidth: 1.5,
    margin: 5,
    marginTop: 0,
    borderColor: Theme.themeColor,
    fontFamily: Theme.fontSecondary,
  },
  inputContainerStyle: {
    borderBottomColor: "transparent",
    padding: 8,
  },
});
