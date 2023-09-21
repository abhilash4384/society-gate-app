import { StyleSheet } from "react-native";
import { Theme, wp, hp } from "components";

const styles = StyleSheet.create({
  bannerContainer: {
    width: wp("100%"),
    height: 200,
    marginBottom: 10
  },
  banner: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover",
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
});

export default styles;
