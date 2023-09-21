import React, { useState, useEffect, useRef } from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  AsyncStorage,
} from "react-native";
import { SplashScreen } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import useLinking from "./navigation/useLinking";
import AppNavigation from "./navigation";
import AppLoadingSceen from "./screens/appLoading/AppLoadingScreen";
import { AuthContext } from "./context/AuthContext";
import Theme from "./components/Theme";


export default function App(props) {
  const [reducerState, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SAVE_TOKEN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case "DELETE_TOKEN":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [initialNavigationState, setInitialNavigationState] = useState();
  const containerRef = useRef();
  const { getInitialState } = useLinking(containerRef);
  const [state, setState] = useState({
    fetchedUserDetails: false,
  });

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      let userToken;
      try {
        SplashScreen.preventAutoHide();
        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          montserrat: require("./assets/fonts/Montserrat-Regular.ttf"),
          playfairDisplay: require("./assets/fonts/PlayfairDisplay-Regular.ttf"),
        });
        userToken = await AsyncStorage.getItem("userToken");
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        dispatch({ type: "RESTORE_TOKEN", token: userToken });
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      saveUserToken: async (data) => {
        console.log("captured data = ", data);
        await AsyncStorage.setItem("userToken", data.userToken);
        dispatch({ type: "SAVE_TOKEN", token: data.userToken });
      },
      deleteToken: async () => {
        await AsyncStorage.clear();
        dispatch({ type: "DELETE_TOKEN" });
      },
    }),
    []
  );

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else if (state.fetchedUserDetails) {
    return (
      <SafeAreaProvider>
        {/* <SafeAreaView style={styles.container}> */}
          <AuthContext.Provider value={authContext}>
            {Platform.OS === "ios" && <StatusBar barStyle="default" />}
            <NavigationContainer
              ref={containerRef}
              initialState={initialNavigationState}
            >
              <AppNavigation userToken={reducerState.userToken} />
            </NavigationContainer>
          </AuthContext.Provider>
        {/* </SafeAreaView> */}
      </SafeAreaProvider>
    );
  } else {
    setState({ fetchedUserDetails: true });
    return <AppLoadingSceen />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.themeColor
  },
});
