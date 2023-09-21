import * as VectorIcon from "@expo/vector-icons";
import * as React from "react";
import PropTypes from "prop-types";
import Theme from "../Theme";

export const Icon = (props) => {
  const iconType = props.type ? props.type : "";
  const color = props.focused ? Theme.tabIconSelected : props.iconColor;
  const customStyle = { ...props, color };
  switch (iconType.toLowerCase()) {
    case "antdesign":
      return <VectorIcon.AntDesign {...customStyle} />;
    case "entypo":
      return <VectorIcon.Entypo {...customStyle} />;
    case "evilicons":
      return <VectorIcon.EvilIcons {...customStyle} />;
    case "feather":
      return <VectorIcon.Feather {...customStyle} />;
    case "fontawesome":
      return <VectorIcon.FontAwesome {...customStyle} />;
    case "fontawesome5":
      return <VectorIcon.FontAwesome5 {...customStyle} />;
    case "foundation":
      return <VectorIcon.Foundation {...customStyle} />;
    case "materialcommunityicons":
      return <VectorIcon.MaterialCommunityIcons {...customStyle} />;
    case "materialicons":
      return <VectorIcon.MaterialIcons {...customStyle} />;
    case "octicons":
      return <VectorIcon.Octicons {...customStyle} />;
    case "simplelineicons":
      return <VectorIcon.SimpleLineIcons {...customStyle} />;
    case "zocial":
      return <VectorIcon.Zocial {...customStyle} />;
    default:
      return <VectorIcon.Ionicons {...customStyle} />;
  }
};

export const ButtonIcon = (props) => {
  const iconType = props.type ? props.type : "";
  const color = props.focused ? Theme.tabIconSelected : props.iconColor;
  const customStyle = { ...props, color };
  switch (iconType.toLowerCase()) {
    case "antdesign":
      return <VectorIcon.AntDesign.Button {...customStyle} />;
    case "entypo":
      return <VectorIcon.Entypo.Button {...customStyle} />;
    case "evilicons":
      return <VectorIcon.EvilIcons.Button {...customStyle} />;
    case "feather":
      return <VectorIcon.Feather.Button {...customStyle} />;
    case "fontawesome5":
      return <VectorIcon.FontAwesome5.Button {...customStyle} />;
    case "foundation":
      return <VectorIcon.Foundation.Button {...customStyle} />;
    case "materialcommunityicons":
      return (
        <VectorIcon.MaterialCommunityIcons.Button
          underlayColor={Theme.themeButtonOverlay}
          backgroundColor="transparent"
          {...customStyle}
        />
      );
    case "materialicons":
      return <VectorIcon.MaterialIcons.Button {...customStyle} />;
    case "octicons":
      return <VectorIcon.Octicons.Button {...customStyle} />;
    case "simplelineicons":
      return <VectorIcon.SimpleLineIcons.Button {...customStyle} />;
    case "zocial":
      return <VectorIcon.Zocial.Button {...customStyle} />;
    default:
      return (
        <VectorIcon.FontAwesome.Button
        underlayColor={Theme.themeButtonOverlay}
          backgroundColor="transparent"
          {...customStyle}
        />
      );
  }
};

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.any,
  type: PropTypes.string,
  focused: PropTypes.bool,
  iconColor: PropTypes.string,
  onPress: PropTypes.any,
};

Icon.defaultProps = {
  size: 30,
  style: { marginBottom: -3 },
  type: "Ionicons",
  iconColor: Theme.tabIconDefault,
};
