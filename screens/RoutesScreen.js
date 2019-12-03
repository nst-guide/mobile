import React from 'react';
import { View } from 'react-native';
import { Appbar, Text } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Parse, Waypoint } from '../core/parse';

class RoutesScreen extends React.Component {
  state = {
    results: [],
  };

  static navigationOptions = {
    drawerLabel: 'Settings',
    drawerIcon: ({ tintColor }) => (
      <FontAwesome5 name="cog" color={tintColor} />
    ),
  };

  async componentDidMount() {
    // const Waypoint = Parse.Object.extend('Waypoint');
    // const query = new Parse.Query(Waypoint);
    // query.equalTo('alt', 939.7);
    // const results = await query.find();
    // console.log('Successfully retrieved ' + results.length + ' scores.');
    // // Do something with the returned Parse.Object values
    // for (let i = 0; i < results.length; i++) {
    //   var object = results[i];
    //   console.log(object.id + ' - ' + object.get('playerName'));
    // }

    const query = new Parse.Query(Waypoint);
    // console.log('building query');
    query.equalTo('alt', 939.7);
    // console.log('sending query');
    query.find().then(results => {
      console.log(results);
      this.setState({ results: results });
    });
  }

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
        <Text>{JSON.stringify(this.state.results)}</Text>
      </View>
    );
  }
}
export default RoutesScreen;
