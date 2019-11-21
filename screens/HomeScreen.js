import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Map } from '../components/Map';
import DrawerButton from '../components/DrawerButton';
import AddContentButton from '../components/AddContentButton';
import FindWaypointsButton from '../components/FindWaypointsButton';
import { FAB, Portal, Provider } from 'react-native-paper';

// Note: I currently have the FAB.group component (i.e. FindWaypointsButton) in
// a separate <Provider><Portal> tree than the layers and locator FABs. This is
// required so that when FindWaypointsButton is clicked, the options that then
// show up appear _above_ the layers and locator FABs, and not beneath them.

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elevationCollapsed: true,
    };
  }

  toggleElevation() {
    console.log('toggling elevation');
    this.setState({ elevationCollapsed: !this.state.elevationCollapsed });
  }

  render() {
    return (
      <View style={styles.container}>
        <Map />
        <Provider>
          <Portal>
            {/* Layers button */}
            <FAB style={styles.layersFAB} icon="layer-group" />
            {/* Center on location button */}
            <FAB style={styles.locatorFAB} icon="location-arrow" />
          </Portal>
        </Provider>
        <Provider>
          <Portal>
            <DrawerButton
              onPress={() => this.props.navigation.toggleDrawer()}
            />
            <AddContentButton onPress={() => console.log('add content')} />

            <FAB
              small
              style={styles.elevationFAB}
              icon="mountain"
              label="Elevation"
              onPress={() => this.toggleElevation()}
            />

            <FindWaypointsButton
              onPress={() => console.log('Find waypoints')}
            />
          </Portal>
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  layersFAB: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 165,
  },
  locatorFAB: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 100,
  },
  elevationFAB: {
    position: 'absolute',
    margin: 16,
    left: 10,
    bottom: 40,
  },
});
