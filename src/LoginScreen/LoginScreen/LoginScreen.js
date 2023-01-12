import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
const bgImage = require("../../../assets/images/bG.jpg");

const initialState = {
  email: "",
  password: "",
};

const LoginScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [passwordIsHidden, setPasswordIsHidden] = useState(true);
  const [state, setState] = useState(initialState);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  const handleOnFocus = () => {
    setIsShowKeyboard(true);
    setIsInputFocused(true);
  };

  const handleOnBlur = () => {
    setIsShowKeyboard(false);
    setIsInputFocused(false);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <ImageBackground source={bgImage} style={styles.image}>
        <View
          style={{
            ...styles.container,
            marginBottom: isShowKeyboard ? 70 : 0,
          }}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View
              style={{
                backgroundColor: "#fff",
                width: "100%",
                height: 490,
                borderTopRightRadius: 25,
                borderTopLeftRadius: 25,
              }}
            >
              <Text style={styles.title}>Войти</Text>
              <View>
                <TextInput
                  style={{
                    ...styles.input,
                    backgroundColor: isInputFocused ? "#ffffff" : "#F6F6F6",
                    borderColor: isInputFocused ? "#FF6C00" : "#E8E8E8",
                    color: "#212121",
                  }}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                  value={state.email}
                  placeholder={"Адрес электронной почты"}
                  onFocus={handleOnFocus}
                  onBlur={handleOnBlur}
                />
                <View style={styles.passwordWrapper}>
                  <TextInput
                    style={{
                      ...styles.input,
                      backgroundColor: isInputFocused ? "#ffffff" : "#F6F6F6",
                      borderColor: isInputFocused ? "#FF6C00" : "#E8E8E8",
                      color: "#212121",
                    }}
                    onChangeText={(value) =>
                      setState((prevState) => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                    value={state.password}
                    placeholder={"Пароль"}
                    secureTextEntry={true}
                    onFocus={handleOnFocus}
                    onBlur={handleOnBlur}
                  />
                  <TouchableOpacity
                    style={styles.showPassBtn}
                    onPress={() => {
                      setPasswordIsHidden(!passwordIsHidden);
                    }}
                    activeOpacity={0.8}
                  >
                    <Text>{passwordIsHidden ? "Показать" : "Скрыть"}</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={styles.submitBtn}
                  onPress={keyboardHide}
                  activeOpacity={0.8}
                  onFocus={() => setIsShowKeyboard(true)}
                >
                  <Text style={styles.submitBtnText}>Войти</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.navigatorBtn}
                  activeOpacity={0.8}
                >
                  <Text style={styles.navigatorBtnText}>
                    Уже есть аккаунт? Войти
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
  },

  container: {
    flex: 1,
    justifyContent: "flex-end",
  },

  input: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    height: 50,
    color: "#BDBDBD",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginHorizontal: 16,
    backgroundColor: "#F6F6F6",
    padding: 16,
    marginBottom: 16,
  },

  avatar: {
    height: 120,
    width: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    position: "absolute",
    top: -60,
    alignSelf: "center",
  },
  plusIcon: {
    width: 25,
    height: 25,
    position: "absolute",
    bottom: 14,
    right: -12.5,
  },
  title: {
    color: "#212121",
    marginTop: 92,
    marginBottom: 32,
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    textAlign: "center",
  },

  passwordWrapper: {
    position: "relative",
  },
  showPassBtn: {
    position: "absolute",
    right: 20,
    bottom: 22.5,
    padding: 10,
  },
  submitBtn: {
    backgroundColor: "#FF6C00",
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
    borderRadius: 100,
    marginTop: 27,
  },
  submitBtnText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#ffffff",
  },
  navigatorBtn: {
    alignItems: "center",
    marginTop: 16,
  },
  navigatorBtnText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#1B4371",
  },
});

export default LoginScreen;
