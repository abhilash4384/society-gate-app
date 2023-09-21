import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { Icon } from "../Icons/Icon";
import Theme from "../Theme";

export const Button = (props) => {
  const {
    title,
    style = {},
    textStyle = {},
    onPress,
    rounded,
    link,
    transparent,
    clear,
    icon,
    vIcon,
    linkTheme
  } = props;
  let btnStyle = { ...styles.button };
  let btnTextStyle = { ...textStyle };

  if (rounded) btnStyle.borderRadius = 30;
  else if (link) {
    delete btnStyle.backgroundColor;
    delete btnStyle.shadowColor;
    btnTextStyle.color = Theme.link;
  }else if (linkTheme) {
    delete btnStyle.backgroundColor;
    delete btnStyle.shadowColor;
    btnTextStyle.color = Theme.themeColor;
  } else if (transparent) {
    delete btnStyle.backgroundColor;
    delete btnStyle.shadowColor;
  } else if (clear) {
    delete btnStyle.backgroundColor;
    delete btnStyle.shadowColor;
    btnStyle.borderColor = Theme.primary;
    btnStyle.borderWidth = 1;
    btnStyle.padding = 5;
    btnTextStyle.color = Theme.primary;
  }

  return (
    <TouchableOpacity onPress={onPress} style={[btnStyle, style]}>
      {!vIcon && (
        <View style={{ flexDirection: "row" }}>
          {icon && <Icon {...icon} />}
          <Text style={[styles.text, btnTextStyle]}>{props.title}</Text>
        </View>
      )}
      {/*  vIcon (v stands for vertical) indicates text below icon btn  */}
      {vIcon && (
        <View style={{alignItems: "center"}}>
          {vIcon && <Icon {...vIcon} />}
          <Text style={[styles.text, btnTextStyle]}>{props.title}</Text>
        </View>
      )}
      {/* end vicon */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: "flex",
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: Theme.themeColor,
    shadowColor: Theme.themeColor,
    shadowOpacity: 0.4,
    shadowOffset: { height: 10, width: 0 },
    shadowRadius: 20,
  },

  text: {
    fontSize: 16,
    fontFamily: Theme.fontSecondary,
    color: "#FFFFFF",
  },
});
