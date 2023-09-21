import React, { Component } from "react";
import {
  View,
  UIManager,
  findNodeHandle,
  TouchableOpacity,
  ActionSheetIOS,
  Platform,
} from "react-native";
// import {Icon} from '../Icons/Icon';
import { FontAwesome } from "@expo/vector-icons";
import PropTypes from "prop-types";



const ICON_SIZE = 24;

export class PopupMenu extends Component {
  static propTypes = {
    // array of strings, will be list items of Menu
    actions: PropTypes.arrayOf(PropTypes.string).isRequired,
    onPress: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      icon: null,
    };
  }

  onError() {
    console.log("Popup Error");
  }

  onPress = () => {
    if (Platform.OS === "android" && this.state.icon) {
      UIManager.showPopupMenu(
        findNodeHandle(this.state.icon),
        this.props.actions,
        this.onError,
        this.props.onPress
      );
    } else {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: this.props.actions,
          destructiveButtonIndex: 2,
          cancelButtonIndex: 2,
        },
        (buttonIndex) => this.props.onPress("iosevent", buttonIndex)
      );
    }
  };

  render() {
    return (
      <View style={{ paddingLeft: 15 }}>
        <TouchableOpacity transparent onPress={this.onPress}>
          <FontAwesome
            style={{ fontSize: 30, color: "#fff" }}
            name="ellipsis-v"
            color={"#ffffff"}
            ref={this.onRef}
          />
        </TouchableOpacity>
      </View>
    );
  }

  onRef = (icon) => {
    if (!this.state.icon) {
      this.setState({ icon });
    }
  };
}
