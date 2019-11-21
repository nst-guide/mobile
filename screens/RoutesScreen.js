import React from "react";
import { View } from "react-native";
import { Appbar, Text } from "react-native-paper";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";


class RoutesScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Settings",
    drawerIcon: ({ tintColor }) => (
      <FontAwesome5
        name='cog'
        color={tintColor}
      />
    )
  };

  render() {
    return (
      <View>
        <Appbar.Header>
          <Appbar.BackAction
            onPress={() => this.props.navigation.toggleDrawer()}
          />
          <Appbar.Content title="Routes" />
        </Appbar.Header>
        <Text>User-created routes</Text>
      </View>
    );
  }
}
export default RoutesScreen;
