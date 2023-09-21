import React, { useState } from "react";
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
import { GENDER_TYPES, BLOOD_GROUPS } from "utils/constants";

import styles from "./styles";

const EditProfile = (props) => {
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
    alternateContactNumber1: {
      name: "alternateContactNumber1",
      label: "Alternate ContactNumber-1",
      value: "",
      keyboardType: "numeric",
    },
    alternateContactNumber2: {
      name: "alternateContactNumber2",
      label: "Alternate ContactNumber-2",
      value: "",
      keyboardType: "numeric",
    },
    gender: {
      name: "gender",
      label: "Gender",
      value: "",
    },
    dob: {
      name: "dob",
      label: "Date Of Birth",
      value: "",
    },
    anniversaryDate: {
      name: "anniversaryDate",
      label: "Anniversary Date",
      value: "",
    },
    bloodGroup: {
      name: "bloodGroup",
      label: "Blood Group",
      value: "",
    },
    address: {
      name: "address",
      label: "Address",
      value: "",
    },
    occupation: {
      name: "occupation",
      label: "Occupation",
      value: "",
    },
    hobbies: {
      name: "hobbies",
      label: "Hobbies",
      value: "",
    },
    languages: {
      name: "languages",
      label: "Languages",
      value: "",
    },
    facebookProfile: {
      name: "facebookProfile",
      label: "Facebook Profile",
      value: "",
    },
    linkedinProfile: {
      name: "linkedinProfile",
      label: "Linkedin Profile",
      value: "",
    },
    instagramProfile: {
      name: "instagramProfile",
      label: "Instagram Profile",
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
        <FloatingInput
          {...state.alternateContactNumber1}
          onBlur={() => validateFormHandler(isSubmitted)}
          onChangeText={(value) =>
            onChangeHandler("alternateContactNumber1", value)
          }
        />
        <FloatingInput
          {...state.alternateContactNumber2}
          onBlur={() => validateFormHandler(isSubmitted)}
          onChangeText={(value) =>
            onChangeHandler("alternateContactNumber2", value)
          }
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
        <Calender
          {...state.dob}
          onBlur={() => validateFormHandler(isSubmitted)}
          onChangeText={(value) => onChangeHandler("dob", value)}
        />
        <Calender
          {...state.anniversaryDate}
          onBlur={() => validateFormHandler(isSubmitted)}
          onChangeText={(value) => onChangeHandler("anniversaryDate", value)}
        />
        <Dropdown
          data={BLOOD_GROUPS}
          {...state.bloodGroup}
          labelExtractor={(value) => value}
          valueExtractor={(value) => value}
          onChangeText={(value) => {
            onChangeHandler("bloodGroup", value);
            validateFormHandler(isSubmitted);
          }}
        />
        <FloatingInput
          {...state.address}
          onBlur={() => validateFormHandler(isSubmitted)}
          onChangeText={(value) => onChangeHandler("address", value)}
        />
        <FloatingInput
          {...state.occupation}
          onBlur={() => validateFormHandler(isSubmitted)}
          onChangeText={(value) => onChangeHandler("occupation", value)}
        />
        <FloatingInput
          {...state.hobbies}
          onBlur={() => validateFormHandler(isSubmitted)}
          onChangeText={(value) => onChangeHandler("hobbies", value)}
        />
        <FloatingInput
          {...state.languages}
          onBlur={() => validateFormHandler(isSubmitted)}
          onChangeText={(value) => onChangeHandler("languages", value)}
        />
        <FloatingInput
          {...state.facebookProfile}
          onBlur={() => validateFormHandler(isSubmitted)}
          onChangeText={(value) => onChangeHandler("facebookProfile", value)}
        />
        <FloatingInput
          {...state.linkedinProfile}
          onBlur={() => validateFormHandler(isSubmitted)}
          onChangeText={(value) => onChangeHandler("linkedinProfile", value)}
        />
        <FloatingInput
          {...state.instagramProfile}
          onBlur={() => validateFormHandler(isSubmitted)}
          onChangeText={(value) => onChangeHandler("instagramProfile", value)}
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

export default EditProfile;
