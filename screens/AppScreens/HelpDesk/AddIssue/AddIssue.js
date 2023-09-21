import React, { useState } from "react";
import { Image } from "react-native";
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
  Dropdown,
} from "components";
import { validateForm } from "utils/validate";
import {
  COMPLAINT_NATURE,
  COMPLAINT_AREA,
  COMPLAINT_CATEGORY,
} from "utils/constants";
import * as ImagePicker from "expo-image-picker";

const AddIssue = (props) => {
  const [state, setState] = useState({
    issueType: {
      name: "Issue Type",
      value: 1,
    },
    complaintNature: {
      name: "complaintNature",
      label: "Select Complaint Nature",
      value: "",
    },
    area: {
      name: "area",
      label: "Select Area",
      value: "",
    },
    category: {
      name: "category",
      label: "Select Category",
      value: "",
    },
    title: {
      name: "title",
      label: "Title*",
      value: "",
      required: true,
    },
    issue: {
      name: "issue",
      label: "Issue",
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

  const [selectedImage, setSelectedImage] = useState(null);

  const openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      console.log("Permission to access camera roll is required!");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri });
  };

  const navigate = (path) => props.navigation.navigate(`${path}`);
  return (
    <KeyboardView>
      <CardConatiner cardStyle={Theme.ptb15}>
        <CardHCenter>
          <SwitchButton
            onValueChange={(value) => onChangeHandler("issueType", value)}
            text1="Personal Issue"
            text2="Community Issue"
            switchWidth={300}
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
        <Dropdown
          data={COMPLAINT_NATURE}
          {...state.complaintNature}
          labelExtractor={(value) => value}
          valueExtractor={(value) => value}
          onChangeText={(value) => {
            onChangeHandler("complaintNature", value);
            validateFormHandler(isSubmitted);
          }}
        />
        <Dropdown
          data={COMPLAINT_AREA}
          {...state.area}
          labelExtractor={(value) => value}
          valueExtractor={(value) => value}
          onChangeText={(value) => {
            onChangeHandler("area", value);
            validateFormHandler(isSubmitted);
          }}
        />
        <Dropdown
          data={COMPLAINT_CATEGORY}
          {...state.category}
          labelExtractor={(value) => value}
          valueExtractor={(value) => value}
          onChangeText={(value) => {
            onChangeHandler("category", value);
            validateFormHandler(isSubmitted);
          }}
        />

        <FloatingInput
          {...state.title}
          error={errors.title}
          onBlur={() => validateFormHandler(isSubmitted)}
          onChangeText={(value) => onChangeHandler("title", value)}
        />

        <FloatingInput
          {...state.issue}
          onBlur={() => validateFormHandler(isSubmitted)}
          onChangeText={(value) => onChangeHandler("issue", value)}
        />

        {selectedImage && (
          <Image
            style={styles.avatar}
            source={{ uri: selectedImage.localUri }}
          />
        )}

        {!selectedImage && (
          <CardHCenter cardStyle={{ marginBottom: 10 }}>
            <Button
              clear
              onPress={openImagePickerAsync}
              title="Attach a photo"
            />
          </CardHCenter>
        )}

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

export default AddIssue;
