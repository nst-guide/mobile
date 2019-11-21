import React, { memo, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { theme } from "../core/theme";
import {
  emailValidator,
  passwordValidator,
  usernameValidator
} from "../core/utils";
import { User } from "../core/parse"


const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const _onSignUpPressed = () => {
    const usernameError = usernameValidator(username.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError || usernameError) {
      setUsername({ ...username, error: usernameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    user = new User({username: username.value, email:email.value, password:password.value})
    user.signUp().then((user) => {
      console.log('successfully signed up')
    }).catch((error) => {
      // TODO: put server error into a separate box, not as part of the username error
      // TODO: currently this gives error of "Warning: Can't perform a React state update on an unmounted component". To repro, try with existing username
      setUsername({...username, error: error.message})
      setEmail(email)
      setPassword(password)
      return;
    })

    navigation.navigate("Home");
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate("AuthStart")} />

      <Logo />

      <Header>Create Account</Header>

      <TextInput
        label="Username"
        returnKeyType="next"
        value={username.value}
        onChangeText={text => {
          const usernameError = usernameValidator(text);
          setUsername({ value: text, error: usernameError });
        }}
        error={!!username.error}
        errorText={username.error}
        autoCapitalize="none"
      />

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => {
          const emailError = emailValidator(text);
          setEmail({ value: text, error: emailError });
        }}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => {
          const passwordError = passwordValidator(text);
          setPassword({ value: text, error: passwordError });
        }}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <Button mode="contained" onPress={_onSignUpPressed} style={styles.button}>
        Sign Up
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  label: {
    color: theme.colors.secondary
  },
  button: {
    marginTop: 24
  },
  row: {
    flexDirection: "row",
    marginTop: 4
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary
  }
});

export default memo(RegisterScreen);
