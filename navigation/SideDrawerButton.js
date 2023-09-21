import React from "react";
import { ButtonIcon } from "../components";

const SideDrawerButton = (props) => {
  return (
    <ButtonIcon
      style={{ padding: 3 }}
      size={25}
      name="navicon"
      onPress={() => props.navigation.openDrawer()}
    />
  );
};

export default SideDrawerButton;
