import React from 'react';
import { View } from 'react-native';
import { Appbar, Text } from 'react-native-paper';
import { Headline } from 'react-native-paper';
import { Parse } from '../core/parse';

class DownloadsScreen extends React.Component {
  state = {
    results: [],
    parse: Parse,
  };

  static navigationOptions = {
    drawerLabel: 'Downloads',
  };

  // static parse = Parse;

  render() {
    return (
      <View>
        <Appbar.Header>
          <Appbar.BackAction
            onPress={() => this.props.navigation.toggleDrawer()}
          />
          <Appbar.Content title="Downloads" />
        </Appbar.Header>
        <Headline>Headline</Headline>
        <Text>Download map data</Text>
      </View>
    );
  }
}
export default DownloadsScreen;
