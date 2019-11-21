import React, { memo } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import BackButton from "../components/BackButton";
import Paragraph from "../components/Paragraph";

const HomeScreen = ({ navigation }) => (
  <Background>
    <BackButton goBack={() => navigation.toggleDrawer()} />

    <Logo />
    <Header>Login Template</Header>

    <Paragraph>
      The easiest way to start with your amazing application.
    </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate("Login")}>
      Login
    </Button>
    <Button mode="outlined" onPress={() => navigation.navigate("Register")}>
      Sign Up
    </Button>
  </Background>
);

export default memo(HomeScreen);
