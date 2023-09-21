import React, { useState } from "react";
import { View, FlatList } from "react-native";
import {
  Theme,
  CardConatiner,
  Button,
  Dropdown,
  CardHCenter,
  MyText,
  Icon,
  Card,
  wp,
  hp,
} from "components";
import FAB from "react-native-fab";
import { ISSUE_TYPES } from "utils/constants";
import styles from "./styles";

const IssueListing = (props) => {
  const [state, setState] = useState("");
  const selectedIssue = props.route.params.issueType;

  const navigate = (path) => props.navigation.navigate(`${path}`);

  const ListItem = ({ item }) => {
    return (
      <Card>
        <CardHCenter cardStyle={{ justifyContent: "space-between" }}>
          <CardHCenter cardStyle={{ justifyContent: "flex-start", padding: 5 }}>
            <View
              style={{
                padding: 10,
                margin: 5,
                backgroundColor: Theme.themeColor,
                borderRadius: 5,
              }}
            >
              <MyText
                white
                textStyle={{
                  fontFamily: Theme.fontSecondary,
                  textAlign: "center",
                }}
              >
                Ticket No
              </MyText>
              <MyText
                white
                textStyle={{
                  fontFamily: Theme.fontSecondary,
                  textAlign: "center",
                }}
              >
                #00{item * 3}
              </MyText>
            </View>
            <View>
              <MyText black textStyle={{ fontWeight: "bold" }}>
                {item % 2 === 0 ? "Lift Not Working" : "Parking Problem"}
              </MyText>
              <MyText textStyle={{ fontFamily: Theme.fontSecondary }}>
                Categeory: {item % 2 === 0 ? "Lift" : "Parking"}
              </MyText>
              {selectedIssue === "open" && item % 2 === 0 && (
                <MyText danger textStyle={{ fontWeight: "bold" }}>
                  Reopen
                </MyText>
              )}
              {selectedIssue === "open" && item % 2 !== 0 && (
                <MyText info textStyle={{ fontWeight: "bold" }}>
                  New
                </MyText>
              )}

              {selectedIssue === "resolved" && (
                <MyText success textStyle={{ fontWeight: "bold" }}>
                  Resolved
                </MyText>
              )}
            </View>
          </CardHCenter>

          <View>
            <MyText grey textStyle={{ fontFamily: Theme.fontSecondary }}>
              05:22PM
            </MyText>
            <MyText grey textStyle={{ fontFamily: Theme.fontSecondary }}>
              11th April 2020
            </MyText>
          </View>
        </CardHCenter>
      </Card>
    );
  };

  return (
    <CardConatiner>
      <Card>
        <Dropdown
          data={ISSUE_TYPES}
          name="issueType"
          label="Filter Issues By"
          value={state.issueType}
          labelExtractor={(value) => value}
          valueExtractor={(value) => value}
          onChangeText={(value) => {
            setState({ issueType: value });
          }}
        />
      </Card>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
        renderItem={({ item }) => <ListItem item={item} />}
        keyExtractor={(item) => item.toString()}
        ListFooterComponent={<View style={{ height: 85 }}></View>}
      />
      <FAB
        buttonColor={Theme.themeColor}
        iconTextColor="#FFFFFF"
        onClickAction={() => navigate("AddIssue")}
        visible={true}
        iconTextComponent={<Icon type="feather" name="plus" />}
      />
    </CardConatiner>
  );
};

export default IssueListing;
