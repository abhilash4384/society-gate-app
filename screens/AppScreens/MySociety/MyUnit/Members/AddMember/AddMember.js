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
  Dropdown,
} from "components";
import { validateForm } from "utils/validate";

const AddMember = (props) => {
  const membershipTypes = ["Silver", "Gold", "Platinum"];

  const [state, setState] = useState({
    userName: {
      name: "userName",
      label: "Name*",
      value: "",
      required: true,
    },
    contactNumber: {
      name: "contactNumber",
      label: "Contact Number*",
      value: "",
      required: true,
      keyboardType: "numeric"
    },
    email: {
      name: "email",
      type: "email",
      label: "Email*  ",
      value: "",
      required: true,
      keyboardType: "email-address"
    },
    address: {
      name: "address",
      label: "Address",
      value: "",
    },
    membership: {
      name: "membership",
      label: "Membership",
      value: "",
    },
  });
  const [errors, setErrors] = useState({
    userName: "",
    email: "",
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
        <FloatingInput
          {...state.userName}
          error={errors.userName}
          onBlur={() => validateFormHandler(isSubmitted)}
          onChangeText={(value) => onChangeHandler("userName", value)}
        />
        <FloatingInput
          {...state.contactNumber}
          error={errors.contactNumber}
          onBlur={() => validateFormHandler(isSubmitted)}
          onChangeText={(value) => onChangeHandler("contactNumber", value)}
        />
        <FloatingInput
          {...state.email}
          error={errors.email}
          onBlur={() => validateFormHandler(isSubmitted)}
          onChangeText={(value) => onChangeHandler("email", value)}
        />
        <Dropdown
          data={membershipTypes}
          {...state.membership}
          labelExtractor={(value) => value}
          valueExtractor={(value) => value}
          error={errors.membership}
          onChangeText={(value) => {
            onChangeHandler("membership", value);
            validateFormHandler(isSubmitted);
          }}
        />
        <FloatingInput
          {...state.address}
          error={errors.address}
          onBlur={() => validateFormHandler(isSubmitted)}
          onChangeText={(value) => onChangeHandler("address", value)}
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

export default AddMember;
