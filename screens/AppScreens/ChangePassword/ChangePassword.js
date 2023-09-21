import React, { useState } from "react";
import { View } from "react-native";
import styles from "./styles";
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

const ChangePassword = (props) => {
  const [state, setState] = useState({
    password: {
      name: "password",
      label: "Old Password*",
      value: "",
      required: true,
      secureTextEntry: true,
    },
    newPassword: {
      name: "newPassword",
      label: "New Password*",
      value: "",
      required: true,
      secureTextEntry: true,
    },
    confirmPassword: {
      name: "confirmPassword",
      label: "Confirm Password*",
      value: "",
      required: true,
      secureTextEntry: true,
    },
  });
  const [errors, setErrors] = useState({
    password: "",
    newPassword: "",
    confirmPassword: ""
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
    else if(state.newPassword !== state.confirmPassword) {
      setErrors({ confirmPassword: "New password and Confirm password do not match."});
    }else setErrors({ isError: false });
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
        <FloatingInput
          {...state.password}
          error={errors.password}
          onBlur={() => validateFormHandler(isSubmitted)}
          onChangeText={(value) => onChangeHandler("password", value)}
        />
        <FloatingInput
          {...state.newPassword}
          error={errors.newPassword}
          onBlur={() => validateFormHandler(isSubmitted)}
          onChangeText={(value) => onChangeHandler("newPassword", value)}
        />
        <FloatingInput
          {...state.confirmPassword}
          error={errors.confirmPassword}
          onBlur={() => validateFormHandler(isSubmitted)}
          onChangeText={(value) => onChangeHandler("confirmPassword", value)}
        />
        <CardHCenter cardStyle={[Theme.mt10]}>
          <Button
            rounded
            title="Update Password"
            style={styles.btnStyle}
            onPress={submitHandler}
          />
        </CardHCenter>
      </CardConatiner>
    </KeyboardView>
  );
};

export default ChangePassword;
