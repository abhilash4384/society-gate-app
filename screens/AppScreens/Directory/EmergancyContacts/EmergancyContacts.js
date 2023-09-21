import React, { useState } from "react";
import { View, Image, FlatList, Text, Linking, Platform } from "react-native";
// import styles from "./styles";
import {
  Theme,
  Card,
  CardConatiner,
  CardHCenter,
  MyText,
  Icon,
  Button,
  ButtonIcon,
  CustomInput,
  SearchInput,
} from "components";

const EMERGENCY_CONTACTS = [
  {
    name: "Police",
    phone: "100",
  },
  {
    name: "Hospital",
    phone: "020121212",
  },
  {
    name: "Ambulance",
    phone: "102",
  },
];

const EmergancyContacts = (props) => {
  const [state, setState] = useState({
    items: EMERGENCY_CONTACTS,
    searchValue: "",
  });

  const dialCall = (phone) => {
    let phoneNumber = "";
    if (Platform.OS === "android") {
      phoneNumber = "tel:${" + phone + "}";
    } else {
      phoneNumber = "telprompt:${" + phone + "}";
    }
    Linking.openURL(phoneNumber);
  };

  const filterItems = (value) => {
    const filtredItems = EMERGENCY_CONTACTS.filter((item) => {
      const heystack = value ? value.toLowerCase() : "";
      return (
        item.name.toLowerCase().includes(heystack) ||
        item.phone.includes(heystack)
      );
    });

    setState({ searchValue: value, items: filtredItems });
  };

  const ListItem = ({ item }) => {
    return (
      <Card>
        <CardHCenter cardStyle={{ justifyContent: "space-between" }}>
          <CardHCenter cardStyle={{ justifyContent: "flex-start", padding: 5 }}>
            <View>
              <MyText black textStyle={{ fontWeight: "bold" }}>
                {item.name}
              </MyText>
              <MyText textStyle={{ fontFamily: Theme.fontSecondary }}>
                {item.phone}
              </MyText>
            </View>
          </CardHCenter>
          <ButtonIcon
            type="materialcommunityicons"
            name={"phone"}
            size={20}
            iconColor={Theme.themeColor}
            style={{ marginRight: 10 }}
            onPress={() => dialCall(item.phone)}
          />
        </CardHCenter>
      </Card>
    );
  };

  return (
    <CardConatiner>
      <Card>
        <SearchInput
          name="searchValue"
          placeholder="Search Here..."
          value={state.searchValue}
          onChangeText={filterItems}
        />
      </Card>
      <FlatList
        data={state.items}
        renderItem={({ item }) => <ListItem item={item} />}
        keyExtractor={(item) => item.name.toString()}
        ListFooterComponent={<View style={{ height: 85 }}></View>}
      />
    </CardConatiner>
  );
};

export default EmergancyContacts;
