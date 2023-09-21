import React from "react";
import { View, Image, FlatList, Text, Platform, Linking } from "react-native";
import FAB from "react-native-fab";
import styles from "./styles";
import {
  Theme,
  Card,
  CardConatiner,
  CardHCenter,
  MyText,
  Icon,
  Button,
  ButtonIcon,
} from "components";

const avatar = require("../../../../../assets/images/avatar.png");

const Staff = (props) => {
  const navigate = (path) => props.navigation.navigate(`${path}`);

  const dialCall = (phone) => {
    let phoneNumber = "";
    if (Platform.OS === "android") {
      phoneNumber = "tel:${" + phone + "}";
    } else {
      phoneNumber = "telprompt:${" + phone + "}";
    }
    Linking.openURL(phoneNumber);
  };

  const ListItem = ({ item }) => {
    return (
      <Card>
        <CardHCenter cardStyle={{ justifyContent: "space-between" }}>
          <CardHCenter cardStyle={{ justifyContent: "flex-start", padding: 5 }}>
            <Image style={styles.avatar} source={avatar} />
            <View>
              <MyText black textStyle={{ fontWeight: "bold" }}>
                {item % 2 === 0 ? "Akshay Kumar" : "Hritik Roshan"}
              </MyText>
              <MyText textStyle={{ fontFamily: Theme.fontSecondary }}>
                {item % 2 === 0 ? "Cook" : "Tution"}
              </MyText>
            </View>
          </CardHCenter>
          <ButtonIcon
            type="materialcommunityicons"
            name={"phone"}
            size={20}
            iconColor={Theme.themeColor}
            style={{ marginRight: 10 }}
            onPress={() => dialCall("01234567890")}
          />
        </CardHCenter>
      </Card>
    );
  };

  return (
    <CardConatiner>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
        renderItem={({ item }) => <ListItem item={item} />}
        keyExtractor={(item) => item.toString()}
        ListFooterComponent={<View style={{ height: 85 }}></View>}
      />
      <FAB
        buttonColor={Theme.themeColor}
        iconTextColor="#FFFFFF"
        onClickAction={() => navigate("AddStaff")}
        visible={true}
        iconTextComponent={<Icon type="feather" name="plus" />}
      />
    </CardConatiner>
  );
};

export default Staff;
