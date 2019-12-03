import React from 'react';
import { View } from 'react-native';
import { Appbar, Text } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

class DownloadsScreen extends React.Component {
  state = {
    results: [],
  };

  static navigationOptions = {
    drawerLabel: 'Downloads',
    drawerIcon: ({ tintColor }) => (
      <FontAwesome5 name="download" color={tintColor} />
    ),
  };

  render() {
    return (
      <View>
        <Appbar.Header>
          <Appbar.BackAction
            onPress={() => this.props.navigation.toggleDrawer()}
          />
          <Appbar.Content title="Downloads" />
        </Appbar.Header>
        <Text>Download map data</Text>
      </View>
    );
  }
}
export default DownloadsScreen;
