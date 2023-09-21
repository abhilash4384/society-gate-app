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
  Calender,
} from "components";
import { validateForm } from "utils/validate";
import { GENDER_TYPES, ROLE_TYPES } from "utils/constants";

const AddStaff = (props) => {
  const [state, setState] = useState({
    name: {
      name: "name",
      label: "Name*",
      value: "",
      required: true,
    },
    contactNumber: {
      name: "contactNumber",
      label: "Contact Number*",
      value: "",
      required: true,
      keyboardType: "numeric",
    },
    role: {
      name: "role",
      label: "Role*",
      value: "",
      required: true,
    },
    gender: {
      name: "gender",
      label: "Gender",
      value: "",
    },
    qualification: {
      name: "qualification",
      label: "Qualification",
      value: "",
    },
    vehicleNumber: {
      name: "vehicleNumber",
      label: "Vehicle Number",
      value: "",
    },
    dob: {
      name: "dob",
      label: "Date Of Birth*",
      value: "",
      required: true,
    },
    address: {
      name: "address",
      label: "Address*",
      value: "",
      required: true,
      multiline: true,
    },
  });
  const [errors, setErrors] = useState({
    name: "",
  });
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
      <CardConatiner cardStyle={Theme.ptb15}>
        <FloatingInput
          {...state.name}
          error={errors.name}
          onBlur={() => validateFormHandler(isSubmitted)}
          onChangeText={(value) => onChangeHandler("name", value)}
        />
        <FloatingInput
          {...state.contactNumber}
          error={errors.contactNumber}
          onBlur={() => validateFormHandler(isSubmitted)}
          onChangeText={(value) => onChangeHandler("contactNumber", value)}
        />
        <Dropdown
          data={ROLE_TYPES}
          {...state.role}
          labelExtractor={(value) => value}
          valueExtractor={(value) => value}
          error={errors.role}
          onChangeText={(value) => {
            onChangeHandler("role", value);
            validateFormHandler(isSubmitted);
          }}
        />
        <Dropdown
          data={GENDER_TYPES}
          {...state.gender}
          labelExtractor={(value) => value}
          valueExtractor={(value) => value}
          onChangeText={(value) => {
            onChangeHandler("gender", value);
            validateFormHandler(isSubmitted);
          }}
        />
        <FloatingInput
          {...state.qualification}
          onBlur={() => validateFormHandler(isSubmitted)}
          onChangeText={(value) => onChangeHandler("qualification", value)}
        />
        <FloatingInput
          {...state.vehicleNumber}
          onBlur={() => validateFormHandler(isSubmitted)}
          onChangeText={(value) => onChangeHandler("vehicleNumber", value)}
        />
        <Calender
          {...state.dob}
          error={errors.dob}
          onBlur={() => validateFormHandler(isSubmitted)}
          onChangeText={(value) => onChangeHandler("dob", value)}
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

export default AddStaff;
