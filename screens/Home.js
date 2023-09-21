import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  Theme,
  CardConatiner,
  Button,
  CardHCenter,
  MyText,
  wp,
  hp,
  Card,
  Icon,
  CardVCenter,
} from "../components";

const avatar = require("../assets/images/avatar.png");

const screens = [
  {
    title: "Directory",
    route: "Directory",
    iconType: "materialcommunityicons",
    iconName: "contacts",
  },
  {
    title: "Help Desk",
    route: "HelpDesk",
    iconType: "materialcommunityicons",
    iconName: "headset",
  },
  {
    title: "Feedback",
    route: "Feedback",
    iconType: "materialcommunityicons",
    iconName: "message-bulleted",
  },
  {
    title: "My Society",
    route: "MySociety",
    iconType: "materialcommunityicons",
    iconName: "office-building",
  },
  {
    title: "About Us",
    route: "AboutUS",
    iconType: "materialcommunityicons",
    iconName: "account-details",
  },
  {
    title: "Change Password",
    route: "ChangePassword",
    iconType: "materialcommunityicons",
    iconName: "lock",
  },
  {
    title: "Profile",
    route: "Profile",
    iconType: "materialcommunityicons",
    iconName: "face",
  },
];

const Home = (props) => {
  const navigate = (path) => props.navigation.navigate(path);

  const ListItem = ({ item }) => {
    return (
      <Card cardStyle={styles.itemCardStyle}>
        <TouchableOpacity onPress={() => navigate(item.route)}>
          <CardVCenter>
            <CardHCenter>
              <Icon
                type={item.iconType}
                size={40}
                iconColor={Theme.themeColor}
                name={item.iconName}
              />
            </CardHCenter>
            <View>
              <CardHCenter>
                <MyText
                  textStyle={{ fontFamily: Theme.fontSecondary, paddingTop: 5 }}
                >
                  {item.title}
                </MyText>
              </CardHCenter>
            </View>
          </CardVCenter>
        </TouchableOpacity>
      </Card>
    );
  };

  return (
    <CardConatiner>
      <CardHCenter cardStyle={styles.headerContainer}>
        <Image style={styles.avatar} source={avatar} />
      </CardHCenter>

      <CardHCenter cardStyle={styles.headerTitleContainer}>
        <MyText grey textStyle={styles.headerTextStyle}>
          Welcome Abhilash, how can we help you?
        </MyText>
      </CardHCenter>

      <FlatList
        contentContainerStyle={{ alignSelf: "center" }}
        data={screens}
        numColumns={2}
        renderItem={({ item }) => <ListItem item={item} />}
        keyExtractor={(item) => item.title}
        ListFooterComponent={<View style={{ height: 85 }}></View>}
      />
    </CardConatiner>
  );
};

export default Home;

const styles = StyleSheet.create({
  headerContainer: {
    margin: 15,
    marginTop: 20,
  },
  headerTitleContainer: {
    margin: 15,
    marginTop: 0,
  },
  headerTextStyle: {
    fontSize: 14,
    fontWeight: "300",
  },
  itemCardStyle: {
    height: 100,
    width: "45%",
    justifyContent: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    marginBottom: 10,
    alignSelf: "center",
  },
});
