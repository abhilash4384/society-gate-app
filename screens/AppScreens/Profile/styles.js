import { StyleSheet } from "react-native";
import { Theme } from "../../../components";

const styles = StyleSheet.create({
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    alignSelf: "center",
    // position: "absolute",
    marginTop: 30,
  },
  containerBody: {
    flex: 1,
    marginTop: 1,
  },
  name: {
    fontSize: 28,
    color: Theme.grey,
    fontWeight: "600",
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: Theme.grey,
    marginTop: 10,
    marginBottom: 20,
    textAlign: "center",
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 250,
    borderRadius: 30,
    backgroundColor: Theme.themeColor,
  },
  btnStyle: {
    width: "70%",
  },

  row: {
    flexDirection: "row",
    padding: 5,
  },
  section: {
    padding: 5,
    borderBottomColor: Theme.lightGrey,
    borderBottomWidth: 0.5,
  },
  title: {
    fontSize: 16,
    fontWeight: "300",
    textTransform: "uppercase",
    paddingBottom: 2,
    fontFamily: Theme.fontSecondary,
  },
  body: {
    fontSize: 13,
    fontFamily: Theme.fontSecondary,
  },

  btn1CardStyle: {
    padding: 10,
    marginTop: 10,
  },

  btn2CardStyle: {
    padding: 10,
    marginBottom: 10,
  },
});

export default styles;
