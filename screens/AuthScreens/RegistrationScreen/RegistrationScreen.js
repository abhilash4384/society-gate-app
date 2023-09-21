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
  KeyboardView
} from "../../../components";
import { validateForm } from "../../../utils/validate";
import AuthHeaderSection from "../../../components/AuthHeaderSection/AuthHeaderSection";

const RegistrationScreen = (props) => {
  const [state, setState] = useState({
    userName: {
      name: "userName",
      label: "User Name",
      value: "",
      required: true,
    },
    email: {
      name: "email",
      type: "email",
      label: "Email",
      value: "",
      required: true,
      keyboardType: "email-address"
    },
    password: {
      name: "password",
      label: "Password",
      secureTextEntry: true,
      value: "",
      required: true,
    },
    cnfPassword: {
      name: "cnfPassword",
      label: "Confirm Password",
      secureTextEntry: true,
      value: "",
      required: true,
    },
  });
  const [errors, setErrors] = useState({
    userName: "",
    email: "",
    password: "",
    cnfPassword: "",
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
    else if (state.password.value !== state.cnfPassword.value) {
      setErrors({
        isError: true,
        cnfPassword: "Password & Confirm Password should match.",
      });
    } else setErrors({ isError: false });
  };

  const loginHandler = () => {
    setIsSubmit(true);
    const res = validateForm(true, state, errors);
    console.log(state);
    if (res && res.isError) setErrors({ ...res });
    else if (state.password.value !== state.cnfPassword.value) {
      setErrors({
        isError: true,
        cnfPassword: "Password & Confirm Password should match.",
      });
    } else setErrors({ isError: false });
  };

  const navigate = (path) => props.navigation.navigate(`${path}`);

  return (
    <KeyboardView>
    <CardConatiner cardStyle={Theme.pt30}>
      <AuthHeaderSection />
      <FloatingInput
        {...state.userName}
        error={errors.userName}
        onBlur={() => validateFormHandler(isSubmitted)}
        onChangeText={(value) => onChangeHandler("userName", value)}
      />
      <FloatingInput
        {...state.email}
        error={errors.email}
        onBlur={() => validateFormHandler(isSubmitted)}
        onChangeText={(value) => onChangeHandler("email", value)}
      />
      <FloatingInput
        {...state.password}
        error={errors.password}
        onBlur={() => validateFormHandler(isSubmitted)}
        onChangeText={(value) => onChangeHandler("password", value)}
      />
      <FloatingInput
        {...state.cnfPassword}
        error={errors.cnfPassword}
        onBlur={() => validateFormHandler(isSubmitted)}
        onChangeText={(value) => onChangeHandler("cnfPassword", value)}
      />
      <CardHCenter cardStyle={[Theme.mt10]}>
        <Button
          rounded
          title="SIGN UP"
          style={styles.btnStyle}
          onPress={loginHandler}
        />
      </CardHCenter>

      <CardHCenter cardStyle={[Theme.mt10]}>
        <View style={styles.rularStyle} />
        <MyText grey>Already have an account?</MyText>
        <View style={styles.rularStyle} />
      </CardHCenter>

      <CardHCenter cardStyle={[Theme.mt10]}>
        <Button
          onPress={() => navigate("SignIn")}
          rounded
          title="SIGN IN"
          style={styles.btnStyle}
        />
      </CardHCenter>
    </CardConatiner>
    </KeyboardView>
  );
};

export default RegistrationScreen;
