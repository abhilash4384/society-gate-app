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
  Calender,
  Modal
  } from "components";
import { validateForm } from "utils/validate";

const TestTemplate = (props) => {

  const [state, setState] = useState({
    userName: {
      name: "userName",
      label: "User Name",
      value: "",
      required: true,
    },
  
  });

  const [errors, setErrors] = useState({ userName: "", password: "" });
  const [isSubmitted, setIsSubmit] = useState(false);

  const onChangeHandler = (fieldName, value) => {
    console.log(value)
    const formData = { ...state };
    formData[fieldName].value = value;
    setState({ ...formData });
  };

  return (
    <KeyboardView>
      <CardConatiner cardStyle={Theme.pt50}>
        <Calender 
         {...state.userName}
         onChangeText={(value) => onChangeHandler("userName", value)}
        />
        {/* <Modal /> */}
      </CardConatiner>
    </KeyboardView>
  );
};

export default TestTemplate;
