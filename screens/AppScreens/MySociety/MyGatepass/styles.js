import { StyleSheet } from "react-native";
import { Theme } from "../../../../components";

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: Theme.white,
    marginBottom: 0,
    marginRight: 5
  },
  description: {
    paddingLeft: 5,
    fontSize: 14,
    color: Theme.grey,
    marginTop: 5,
  },
});

export default styles;
