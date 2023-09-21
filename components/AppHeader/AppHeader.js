import React, { PureComponent } from "react";
import { TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import {
  View,
  Text,
  Icon,
  Left,
  Right,
  Thumbnail,
  Body,
  Button,
  Header
} from "native-base";

import HeaderDrawerButton from "./HeaderDrawerButton";
import SearchHeader from "./SearchHeader";
import { connect } from "react-redux";
import * as AppConfig from "@screens/AuthLoadingScreen/selectors";
// import { API_URL } from "react-native-dotenv";
import theme from "@theme/variables/societyTheme";
import PopupMenu from "../PopupMenu";

const API_URL = "";

const avatar = require("@assets/images/avatar1.png");
import styles from "./styles";

class AppHeader extends PureComponent {
  state = {
    displaySearchBar: false
  };

  renderProfileImage() {
    if (this.props?.profile?.profileImagePath) {
      return (
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Profile");
          }}
        >
          <Thumbnail
            source={{
              uri: API_URL + "/" + this.props.profile.profileImagePath
            }}
            style={styles.avatar}
          />
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate("Profile");
        }}
      >
        <Thumbnail source={avatar} style={styles.avatar} />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View
        style={{ backgroundColor: theme.brandPrimary, ...this.props.style }}
      >
        <Header transparent hasTabs>
          {/* <Left style={{ flex: 1 }}> */}
          <Left>
            {!this.props.hideDrawerButton && (
              <HeaderDrawerButton navigation={this.props.navigation} />
            )}

            {this.props.showBackButton && (
              <Button transparent onPress={() => this.props.navigation.pop()}>
                <Icon
                  active
                  type="SimpleLineIcons"
                  name="arrow-left"
                  style={{ fontSize: 26 }}
                />
              </Button>
            )}

            {this.props.showDashboardBackButton && (
              <Button
                transparent
                onPress={() => this.props.navigation.navigate("Dashboard")}
              >
                <Icon
                  active
                  type="SimpleLineIcons"
                  name="arrow-left"
                  style={{ fontSize: 26 }}
                />
              </Button>
            )}

            {this.props.showCloseButton && (
              <Button transparent onPress={this.props.closeModal}>
                <Icon active type="Feather" name="x" style={{ fontSize: 26 }} />
              </Button>
            )}
          </Left>
          <Body>
           

            {this.props.customTitle && (
              <Text note style={styles.titles.customTitle}>
                {this.props.customTitle}
              </Text>
            )}

            {this.props.title && (
              <View style={styles.titles.container}>
                <View style={styles.titles.content}>
                  <Text style={styles.titles.text}>{this.props.title}</Text>
                  {this.props.titleSuffix && (
                    <Text note style={styles.titles.suffix}>
                      {" " + this.props.titleSuffix}
                    </Text>
                  )}
                </View>
                {this.props.subTitle && (
                  <Text note style={styles.titles.subTitle}>
                    {this.props.subTitle}
                  </Text>
                )}
              </View>
            )}
          </Body>
          <Right>
            {this.props.displayAvatar && this.renderProfileImage()}
            {this.props.displaySearch && (
              <Button
                transparent
                onPress={() => {
                  this.setState(() => ({
                    displaySearchBar: !this.state.displaySearchBar
                  }));
                }}
              >
                <Icon active name="ios-search" style={{ fontSize: 34 }} />
              </Button>
            )}

            {this.props.displayEdit && (
              <PopupMenu
                actions={["Edit Profile", "Change Password", "Cancel"]}
                onPress={(eventName, index) => {
                  console.log(eventName, index);
                  if (index === 0) {
                    this.props.navigation.navigate("EditProfile");
                  } else if (index === 1) {
                    this.props.navigation.navigate("ChangePassword");
                  }
                }}
              />
            )}
          </Right>
        </Header>
        
        {this.state.displaySearchBar && (
          <SearchHeader
            onSearch={this.props.onSearch}
            onExport={this.props.onExport}
          />
        )}
      </View>
    );
  }
}

AppHeader.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }),
  title: PropTypes.string,
  titleSuffix: PropTypes.string,
  subTitle: PropTypes.string,
  style: PropTypes.object,
  displayAvatar: PropTypes.bool,
  displaySearch: PropTypes.bool,
  displayLogo: PropTypes.bool,
  onSearch: PropTypes.func,
  onExport: PropTypes.func,
  displayEdit: PropTypes.bool
};

AppHeader.defaultProps = {
  displayAvatar: true,
  displayLogo: true,
  displaySearch: false,
  displayEdit: false,
  titleSuffix: " "
};

export default connect(
  state => ({
    profile: AppConfig.profile(state)
  }),
  null
)(AppHeader);
