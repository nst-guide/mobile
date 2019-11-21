import React from "react";
import { View } from "react-native";
import { Appbar, Text } from "react-native-paper";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

class AccountScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Account",
    drawerIcon: ({ tintColor }) => <FontAwesome5 name="user" color={tintColor} />
  };

  render() {
    return (
      <View>
        <Appbar.Header>
          <Appbar.BackAction
            onPress={() => this.props.navigation.toggleDrawer()}
          />
          <Appbar.Content title="Account" />
        </Appbar.Header>
        <Text>Account information</Text>
      </View>
    );
  }
}
export default AccountScreen;
