import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {
  Theme,
  CardConatiner,
  Button,
  CardHCenter,
  MyText,
  KeyboardView,
  FloatingInput
} from "../../../components";
import { validateForm } from "utils/validate";
import styles from "./styles";

const Feedback = (props) => {
  const [state, setState] = useState({
    title: {
      name: "title",
      label: "Title*",
      value: "",
      required: true,
    },
    description: {
      name: "description",
      label: "Description*",
      value: "",
      required: true,
      multiline: true,
    },
    attachPhoto: {
      name: "attachPhoto",
      label: "Attach Photo",
      value: "",
    },
  
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmit] = useState(false);

  const onChangeHandler = (fieldName, value) => {
    const formData = { ...state };
    formData[fieldName].value = value;
    setState({ ...formData });
  };

  const validateFormHandler = (isSubmitted) => {
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
      <CardConatiner
        cardStyle={{ backgroundColor: Theme.themeColor }}
      >
           <FloatingInput
          {...state.title}
          error={errors.title}
          onBlur={() => validateFormHandler(isSubmitted)}
          onChangeText={(value) => onChangeHandler("title", value)}
        />
        <FloatingInput
          {...state.description}
          customInputStyle={styles.textAreaStyle}
          error={errors.description}
          onBlur={() => validateFormHandler(isSubmitted)}
          onChangeText={(value) => onChangeHandler("description", value)}
        />
          <FloatingInput
          {...state.attachPhoto}
          error={errors.attachPhoto}
          onBlur={() => validateFormHandler(isSubmitted)}
          onChangeText={(value) => onChangeHandler("attachPhoto", value)}
        />
        
        <CardHCenter cardStyle={[Theme.mt10]}>
          <Button
            rounded
            title="Send Feedback"
            style={styles.btnStyle}
            onPress={submitHandler}
          />
        </CardHCenter>
      </CardConatiner>
    </KeyboardView>
  );
};

export default Feedback;
