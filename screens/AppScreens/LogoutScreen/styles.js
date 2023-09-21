import { StyleSheet } from "react-native";
import { Theme } from "../../../components";

const styles = StyleSheet.create({
  btnStyle: {
    width: "70%",
  },

  rularStyle: {
    marginLeft: 5,
    marginRight: 5,
    width: 50,
    borderBottomColor: Theme.primary,
    borderBottomWidth: 1,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  buildingImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
});

export default styles;
