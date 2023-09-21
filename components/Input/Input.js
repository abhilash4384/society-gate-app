import * as React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Theme from "../Theme";
import FloatingLabel from "react-native-floating-labels";
import { MyText } from "../Text/MyText";
import { Icon } from "../Icons/Icon";

export const FloatingInput = (props) => {
  return (
    <>
      <FloatingLabel
        labelStyle={[styles.labelStyle, { ...props.customLabelStyle }]}
        inputStyle={[styles.inputStyle, { ...props.customInputStyle }]}
        style={[styles.formInput, { ...props.cotainerStyle }]}
        {...props}
      >
        {props.label}
      </FloatingLabel>
      {props.error !== "" && (
        <MyText textStyle={{ alignSelf: "center" }} danger>
          {props.error}
        </MyText>
      )}
    </>
  );
};

export const CustomInput = (props) => {
  return (
    <TextInput
      inputStyle={[styles.inputStyle, { ...props.customInputStyle }]}
      style={[styles.formInput, { ...props.cotainerStyle }]}
      {...props}
    />
  );
};

export const SearchInput = (props) => {
  return (
    <View
      style={[
        styles.searchInputViewStyle,
        { ...props.customSearchInputViewStyle },
      ]}
    >
      <Icon
        type="materialcommunityicons"
        name="magnify"
        size={30}
        iconColor={props.iconColor ? props.iconColor : Theme.themeColor}
        style={{ top: 5 }}
      />
      <TextInput
        style={[
          styles.searchInputContainerStyle,
          { ...props.customInputStyle },
        ]}
        {...props}
      />
    </View>
  );
};

export const Input = (props) => {
  return <TextInput {...props} />;
};

const styles = StyleSheet.create({
  labelStyle: {
    color: Theme.themeColor,
    fontFamily: Theme.font,
    fontSize: Theme.textInputLabelFontSize,
  },
  inputStyle: {
    borderWidth: 0,
    fontSize: Theme.textInputFontSize,
  },
  formInput: {
    borderBottomWidth: 1.5,
    margin: 5,
    borderColor: Theme.themeColor,
  },
  searchInputViewStyle: {
    flexDirection: "row",
    borderBottomWidth: 1.5,
    borderColor: Theme.themeColor,
  },
  searchInputContainerStyle: {
    height: 40,
    flex: 1,
    borderBottomWidth: 0,
  },
});
