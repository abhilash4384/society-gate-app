import { Theme } from "../../../../components";

const styles = {
  topCardStyle: {
    justifyContent: "space-evenly",
    padding: 10,
    paddingLeft: 0,
    paddingRight: 0,
    marginTop: 10,
  },

  btnIconStyle: {
    type: "fontawesome",
    size: 30,
    style: {
      marginTop: -5,
    },
    iconColor: Theme.themeColor,
  },

  topBtnTxtStyle: {
    paddingTop: 5,  
    fontSize: 12,
    color: Theme.black,
    textTransform: "uppercase",
  },

  vRularStyle: {
    height: 50,
    borderRightWidth: 0.5,
    borderRightColor: Theme.grey,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: Theme.white,
    marginBottom: 0,
    marginRight: 5,
  },
  description: {
    paddingLeft: 5,
    fontSize: 14,
    color: Theme.grey,
    marginTop: 5,
  },
  rularStyle: {
    marginLeft: 5,
    marginRight: 5,
    flex: 1,
    borderBottomColor: Theme.grey,
    borderBottomWidth: 0.5,
  },

  primaryCardStyle: {
    justifyContent: "space-between",
    padding: 5,
  },

  btnStyle: {
    fontSize: 14,
    color: Theme.success,
  },

  amountTxtStyle: {
    fontSize: 20,
    fontFamily: Theme.fontSecondary,
  },

  btnContainer: {
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
  },
};

export default styles;
