import React, { useState } from "react";
import { View, FlatList } from "react-native";
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
  SearchInput,
} from "components";

import { VEHICLES } from "utils/constants";

const Vehicle = (props) => {
  const [state, setState] = useState({
    vehicles: VEHICLES,
    searchValue: "",
  });

  const filterItems = (value) => {
    const filtredItems = VEHICLES.filter((item) => {
      const heystack = value ? value.toLowerCase() : "";
      return (
        item.name.toLowerCase().includes(heystack) ||
        item.number.toLowerCase().includes(heystack)
      );
    });

    setState({ searchValue: value, vehicles: filtredItems });
  };

  const navigate = (path) => props.navigation.navigate(`${path}`);

  const ListItem = ({ item }) => {
    return (
      <Card>
        <CardHCenter cardStyle={{ justifyContent: "space-between" }}>
          <CardHCenter cardStyle={{ justifyContent: "flex-start", padding: 5 }}>
            {/* <Image style={styles.avatar} source={avatar} /> */}
            <Icon
              type="fontAwesome"
              size={25}
              style={styles.avatar}
              iconColor={Theme.themeColor}
              name={item.type}
            />
            <View>
              <MyText black textStyle={{ fontWeight: "bold" }}>
                {item.name}
              </MyText>
              <MyText textStyle={{ fontFamily: Theme.fontSecondary }}>
                {item.number}
              </MyText>
            </View>
          </CardHCenter>
          <Button linkTheme style={{ paddingRight: 5 }} title="Edit" />
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
        data={state.vehicles}
        renderItem={({ item }) => <ListItem item={item} />}
        keyExtractor={(item) => item.name.toString()}
        ListFooterComponent={<View style={{ height: 85 }}></View>}
      />
      {!props.isLoadedFromDirectory && (
        <FAB
          buttonColor={Theme.themeColor}
          iconTextColor="#FFFFFF"
          onClickAction={() => navigate("AddVehicle")}
          visible={true}
          iconTextComponent={<Icon type="feather" name="plus" />}
        />
      )}
    </CardConatiner>
  );
};

export default Vehicle;
