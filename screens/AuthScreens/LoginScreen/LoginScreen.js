import React, { useState } from "react";
import { View } from "react-native";
import styles from "./styles";
import {
  Theme,
  CardConatiner,
  FloatingInput,
  Button,
  CardHCenter,
  KeyboardView,
  MyText,
} from "../../../components";
import { validateForm } from "../../../utils/validate";
import { AuthContext } from "../../../context/AuthContext";
import { signIn } from "../../../services/authservices";
import AuthHeaderSection from "../../../components/AuthHeaderSection/AuthHeaderSection";

const LoginScreen = (props) => {
  const { saveUserToken } = React.useContext(AuthContext);
  const [state, setState] = useState({
    userName: {
      name: "userName",
      label: "User Name",
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
  });
  const [errors, setErrors] = useState({ userName: "", password: "" });
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

  const loginHandler = async () => {
    setIsSubmit(true);
    const res = validateForm(true, state, errors);
    if (res && res.isError) setErrors({ ...res });
    else {
      setErrors({ isError: false });
      await signIn({
        userName: state.userName.value,
        password: state.password.value,
      }).then((res) => {
        saveUserToken({ userToken: res.userToken });
      });
    }
  };

  const navigate = (path) => props.navigation.navigate(`${path}`);

  return (
    <KeyboardView>
      <CardConatiner cardStyle={Theme.pt50}>
        <AuthHeaderSection />
        <FloatingInput
          {...state.userName}
          error={errors.userName}
          onBlur={() => validateFormHandler(isSubmitted)}
          onChangeText={(value) => onChangeHandler("userName", value)}
        />
        <FloatingInput
          {...state.password}
          error={errors.password}
          onBlur={() => validateFormHandler(isSubmitted)}
          onChangeText={(value) => onChangeHandler("password", value)}
        />
        <CardHCenter cardStyle={[Theme.mt10]}>
          <Button
            rounded
            title="SIGN IN"
            style={styles.btnStyle}
            onPress={loginHandler}
          />
        </CardHCenter>

        <CardHCenter cardStyle={[Theme.mt10]}>
          <View style={styles.rularStyle} />
          <MyText grey>Didn't have an account?</MyText>
          <View style={styles.rularStyle} />
        </CardHCenter>

        <CardHCenter cardStyle={[Theme.mt10]}>
          <Button
            onPress={() => navigate("SignUp")}
            rounded
            title="SIGN UP NOW"
            style={styles.btnStyle}
          />
        </CardHCenter>

        <CardHCenter>
          <Button
            onPress={() => navigate("ForgotPassword")}
            link
            title="Forgot Password?"
          />
        </CardHCenter>
      </CardConatiner>
    </KeyboardView>
  );
};

export default LoginScreen;
