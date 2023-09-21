import React, { useState } from "react";
import { View } from "react-native";
import styles from "./styles";
import SwitchButton from "switch-button-react-native";
import {
  Theme,
  CardConatiner,
  FloatingInput,
  Button,
  CardHCenter,
  MyText,
  KeyboardView,
} from "components";
import { validateForm } from "utils/validate";

const AddVehicle = (props) => {
  const [state, setState] = useState({
    vehicleType: {
      name: "vehicleType",
      value: 1,
    },
    vehicleNumber: {
      name: "vehicleNumber",
      label: "Vehicle Number*",
      value: "",
      required: true,
    },
    modelName: {
      name: "modelName",
      label: "Model Name",
      value: "",
    },
    sticker: {
      name: "sticker",
      label: "Sticker",
      value: "",
    },
  });
  const [errors, setErrors] = useState({
    vehicleNumber: "",
  });
  const [isSubmitted, setIsSubmit] = useState(false);

  const onChangeHandler = (fieldName, value) => {
    const formData = { ...state };
    formData[fieldName].value = value;
    setState({ ...formData });
  };

  validateFormHandler = (isSubmitted) => {
    const res = validateForm(isSubmitted, state, errors);
    if (res && res.isError) setErrors({ ...res });
    else setErrors({ isError: false });
  };

  const submitHandler = () => {
    setIsSubmit(true);
    const res = validateForm(true, state, errors);
    console.log(state);
    if (res && res.isError) setErrors({ ...res });
    else setErrors({ isError: false });
  };

  const navigate = (path) => props.navigation.navigate(`${path}`);
  return (
    <KeyboardView>
      <CardConatiner cardStyle={Theme.ptb15}>
        <CardHCenter>
          <SwitchButton
            onValueChange={(value) => onChangeHandler("vehicleType", value)}
            text1="4 Wheeler"
            text2="2 Wheeler"
            switchWidth={200}
            switchHeight={44}
            switchdirection="rtl" // optional: switch button direction ( ltr and rtl ) --- default ltr
            switchBorderRadius={40}
            switchSpeedChange={500}
            switchBorderColor={Theme.lightGrey} // optional: switch border color --- default #d4d4d4
            switchBackgroundColor={Theme.white} // optional: switch background color --- default #fff
            btnBorderColor="#00a4b9"
            btnBackgroundColor={Theme.themeColor} // optional: button background color --- default #00bcd4
            fontColor={Theme.themeColor} // optional: text font color --- default #b1b1b1
            activeFontColor={Theme.white} // optional: active font color --- default #fff
          />
        </CardHCenter>
        <FloatingInput
          {...state.vehicleNumber}
          error={errors.vehicleNumber}
          onBlur={() => validateFormHandler(isSubmitted)}
          onChangeText={(value) => onChangeHandler("vehicleNumber", value)}
        />
        <FloatingInput
          {...state.modelName}
          error={errors.modelName}
          onBlur={() => validateFormHandler(isSubmitted)}
          onChangeText={(value) => onChangeHandler("modelName", value)}
        />
        <FloatingInput
          {...state.sticker}
          error={errors.sticker}
          onBlur={() => validateFormHandler(isSubmitted)}
          onChangeText={(value) => onChangeHandler("sticker", value)}
        />
        <CardHCenter cardStyle={[Theme.mt10]}>
          <Button
            rounded
            title="Save"
            style={styles.btnStyle}
            onPress={submitHandler}
          />
        </CardHCenter>
      </CardConatiner>
    </KeyboardView>
  );
};

export default AddVehicle;
