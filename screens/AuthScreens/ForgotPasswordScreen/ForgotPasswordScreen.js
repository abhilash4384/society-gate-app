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
import AuthHeaderSection from "../../../components/AuthHeaderSection/AuthHeaderSection";
import { validateForm } from "../../../utils/validate";

const ForgotPasswordScreen = (props) => {
  const [state, setState] = useState({
    email: {
      name: "email",
      label: "Email",
      type: "email",
      value: "",
      required: true,
    },
  });
  const [errors, setErrors] = useState({ email: "" });
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
    if (res && res.isError) setErrors({ ...res });
    else setErrors({ isError: false });
  };

  const navigate = (path) => props.navigation.navigate(`${path}`);

  return (
    <KeyboardView>
    <CardConatiner cardStyle={Theme.pt50}>
      <AuthHeaderSection />
      <FloatingInput
        {...state.email}
        error={errors.email}
        onBlur={() => validateFormHandler(isSubmitted)}
        onChangeText={(value) => onChangeHandler("email", value)}
      />
      <CardHCenter cardStyle={[Theme.mt10]}>
        <Button
          rounded
          title="SUBMIT"
          style={styles.btnStyle}
          onPress={submitHandler}
        />
      </CardHCenter>

      <CardHCenter cardStyle={[Theme.mt10]}>
        <View style={styles.rularStyle} />
        <MyText grey>Details Remembered?</MyText>
        <View style={styles.rularStyle} />
      </CardHCenter>

      <CardHCenter cardStyle={[Theme.mt10]}>
        <Button onPress={() => navigate('SignIn')} rounded title="SIGNIN" style={styles.btnStyle} />
      </CardHCenter>
    </CardConatiner>
    </KeyboardView>
  );
};

export default ForgotPasswordScreen;
