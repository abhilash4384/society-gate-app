import React from "react";
import { ButtonIcon } from "../components";

const SideLogoutButton = (props) => {
  return (
    <ButtonIcon
      style={{ padding: 3 }}
      size={25}
      type="materialcommunityicons"
      name="exit-to-app"
      onPress={() => props.navigation.navigate("Logout")}
    />
  );
};

export default SideLogoutButton;
