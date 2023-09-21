import React, { useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Platform,
  Linking,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import {
  Theme,
  CardConatiner,
  Button,
  MyText,
  CardHCenter,
} from "../../../components";
import * as WebBrowser from "expo-web-browser";

import styles from "./styles";
const avatar = require("../../../assets/images/avatar.png");

const Profile = (props) => {
  const navigate = (path) => props.navigation.navigate(`${path}`);
  const [selectedImage, setSelectedImage] = useState(null);

  const dialCall = (phone) => {
    let phoneNumber = "";
    if (Platform.OS === "android") {
      phoneNumber = "tel:${" + phone + "}";
    } else {
      phoneNumber = "telprompt:${" + phone + "}";
    }
    Linking.openURL(phoneNumber);
  };

  const openWebsite = (link) => WebBrowser.openBrowserAsync(link);

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

  return (
    <CardConatiner cardStyle={{ backgroundColor: Theme.themeColor }}>
      <ScrollView style={styles.containerBody}>
        {!selectedImage && <Image style={styles.avatar} source={avatar} />}
        {selectedImage && (
          <Image
            style={styles.avatar}
            source={{ uri: selectedImage.localUri }}
          />
        )}
        <CardHCenter>
          <MyText textStyle={styles.name}>Abhilash Virat</MyText>
        </CardHCenter>
        <CardHCenter>
          <MyText textStyle={styles.info}>Society Chairman</MyText>
        </CardHCenter>

        <CardHCenter>
          <MyText textStyle={styles.description}>
            Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum
            electram expetendis, omittam deseruisse consequuntur ius an,
          </MyText>
        </CardHCenter>

        <View style={styles.section}>
          <View style={styles.row}>
            <MyText textStyle={styles.title}>Contact Numbers</MyText>
          </View>
          <View grey style={styles.row}>
            <MyText grey textStyle={styles.body}>
              Primary Contact:{" "}
            </MyText>
            <TouchableOpacity onPress={() => dialCall("+91888888888")}>
              <MyText link textStyle={styles.body}>
                +91 888888888
              </MyText>
            </TouchableOpacity>
          </View>

          <View grey style={styles.row}>
            <MyText grey textStyle={styles.body}>
              Alternate Contact-1:{" "}
            </MyText>
            <TouchableOpacity onPress={() => dialCall("+919999999999")}>
              <MyText link textStyle={styles.body}>
                +91 9999999999
              </MyText>
            </TouchableOpacity>
          </View>

          <View grey style={styles.row}>
            <MyText grey textStyle={styles.body}>
              Alternate Contact-2:{" "}
            </MyText>
            <TouchableOpacity onPress={() => dialCall("+914444444444")}>
              <MyText link textStyle={styles.body}>
                +91 4444444444
              </MyText>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.row}>
            <MyText textStyle={styles.title}>Gender</MyText>
          </View>
          <View grey style={styles.row}>
            <MyText grey textStyle={styles.body}>
              Male
            </MyText>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.row}>
            <MyText textStyle={styles.title}>Blood Group</MyText>
          </View>
          <View grey style={styles.row}>
            <MyText grey textStyle={styles.body}>
              O+
            </MyText>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.row}>
            <MyText textStyle={styles.title}>Date Of Birth</MyText>
          </View>
          <View grey style={styles.row}>
            <MyText grey textStyle={styles.body}>
              10th Sept 1996
            </MyText>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.row}>
            <MyText textStyle={styles.title}>Anniversary Date</MyText>
          </View>
          <View grey style={styles.row}>
            <MyText grey textStyle={styles.body}>
              15th Aug 2019
            </MyText>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.row}>
            <MyText textStyle={styles.title}>Occupation</MyText>
          </View>
          <View grey style={styles.row}>
            <MyText grey textStyle={styles.body}>
              Software Engineer
            </MyText>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.row}>
            <MyText textStyle={styles.title}>Hobbies</MyText>
          </View>
          <View grey style={styles.row}>
            <MyText grey textStyle={styles.body}>
              Swimming, Riding
            </MyText>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.row}>
            <MyText textStyle={styles.title}>Social Media Links</MyText>
          </View>
          <View grey style={styles.row}>
            <MyText grey textStyle={styles.body}>
              Facebook:{" "}
            </MyText>
            <TouchableOpacity
              onPress={() => openWebsite("https://m.facebook.com/home.php")}
            >
              <MyText link textStyle={styles.body}>
                abc@fb.com
              </MyText>
            </TouchableOpacity>
          </View>

          <View grey style={styles.row}>
            <MyText grey textStyle={styles.body}>
              Linkedin:{" "}
            </MyText>
            <TouchableOpacity onPress={() => openWebsite("linkedin.com/feed/")}>
              <MyText link textStyle={styles.body}>
                abc@lid.com
              </MyText>
            </TouchableOpacity>
          </View>

          <View grey style={styles.row}>
            <MyText grey textStyle={styles.body}>
              Instagram:{" "}
            </MyText>
            <TouchableOpacity
              onPress={() => openWebsite("https://www.instagram.com/?hl=en")}
            >
              <MyText link textStyle={styles.body}>
                abc@insta.com
              </MyText>
            </TouchableOpacity>
          </View>
        </View>

        <CardHCenter cardStyle={styles.btn1CardStyle}>
          <Button
            onPress={openImagePickerAsync}
            rounded
            title="Change Profile Pic"
            style={styles.buttonContainer}
          />
        </CardHCenter>

        <CardHCenter cardStyle={styles.btn2CardStyle}>
          <Button
            onPress={() => navigate("EditProfile")}
            rounded
            title="Edit Profile"
            style={styles.buttonContainer}
          />
        </CardHCenter>
      </ScrollView>
    </CardConatiner>
  );
};

export default Profile;
