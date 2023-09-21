import React, { useState } from "react";
import { View, Image, FlatList, Text, Linking, Platform } from "react-native";
import FAB from "react-native-fab";
import styles from "./styles";
import {
  Theme,
  Card,
  CardConatiner,
  CardHCenter,
  MyText,
  Icon,
  SearchInput,
  ButtonIcon,
} from "components";

import { MEMBERS } from "utils/constants";
const avatar = require("../../../../../assets/images/avatar.png");

const Members = (props) => {
  const [state, setState] = useState({
    members: MEMBERS,
    searchValue: "",
  });

  const navigate = (path) => props.navigation.navigate(`${path}`);

  const filterItems = (value) => {
    const filtredItems = MEMBERS.filter((item) => {
      const heystack = value ? value.toLowerCase() : "";
      return (
        item.name.toLowerCase().includes(heystack) ||
        item.flatNo.includes(heystack)
      );
    });

    setState({ searchValue: value, members: filtredItems });
  };

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
                {item.name}
              </MyText>
              <MyText textStyle={{ fontFamily: Theme.fontSecondary }}>
                {item.flatNo}
              </MyText>
            </View>
          </CardHCenter>
          <ButtonIcon
            type="materialcommunityicons"
            name={"phone"}
            size={20}
            iconColor={Theme.themeColor}
            style={{ marginRight: 10 }}
            onPress={() => dialCall("000000")}
          />
        </CardHCenter>
      </Card>
    );
  };

  return (
    <CardConatiner>
      {props.isLoadedFromDirectory && (
        <Card>
          <SearchInput
            name="searchValue"
            placeholder="Search Here..."
            value={state.searchValue}
            onChangeText={filterItems}
          />
        </Card>
      )}
      <FlatList
        data={state.members}
        renderItem={({ item }) => <ListItem item={item} />}
        keyExtractor={(item) => item.name.toString()}
      />
      {!props.isLoadedFromDirectory && (
        <FAB
          buttonColor={Theme.themeColor}
          iconTextColor="#FFFFFF"
          onClickAction={() => navigate("AddMember")}
          visible={true}
          iconTextComponent={<Icon type="feather" name="plus" />}
        />
      )}
    </CardConatiner>
  );
};

export default Members;
