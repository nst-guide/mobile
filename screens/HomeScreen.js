import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Map } from '../components/Map';
import DrawerButton from '../components/DrawerButton';
import AddContentButton from '../components/AddContentButton';
import FindWaypointsButton from '../components/FindWaypointsButton';
import LayersModal from '../components/LayersModal';
import AddContentModal from '../components/AddContentModal';
import { FAB, Portal, Provider } from 'react-native-paper';

// Note: I currently have the FAB.group component (i.e. FindWaypointsButton) in
// a separate <Provider><Portal> tree than the layers and locator FABs. This is
// required so that when FindWaypointsButton is clicked, the options that then
// show up appear _above_ the layers and locator FABs, and not beneath them.

// Note: Modals must go last so that they appear _above_ all other layers

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elevationPaneVisible: false,
      layersModalVisible: false,
      addContentModalVisible: false,
    };
  }

  _showLayersModal = () => this.setState({ layersModalVisible: true });
  _hideLayersModal = () => this.setState({ layersModalVisible: false });
  _showAddContentModal = () => this.setState({ addContentModalVisible: true });
  _hideAddContentModal = () => this.setState({ addContentModalVisible: false });

  toggleElevation() {
    console.log('toggling elevation');
    this.setState({ elevationPaneVisible: !this.state.elevationPaneVisible });
  }

  render() {
    return (
      <View style={styles.container}>
        <Map />
        <Provider>
          <Portal>
            {/* Layers button */}
            <FAB
              style={styles.layersFAB}
              icon="layer-group"
              onPress={this._showLayersModal}
            />
            {/* Center on location button */}
            <FAB
              style={styles.locatorFAB}
              icon="location-arrow"
              onPress={() => console.log('centering on location')}
            />
          </Portal>
        </Provider>
        <Provider>
          <Portal>
            <DrawerButton
              onPress={() => this.props.navigation.toggleDrawer()}
            />
            <AddContentButton onPress={this._showAddContentModal} />

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
        <Provider>
          <Portal>
            <AddContentModal
              visible={this.state.addContentModalVisible}
              onDismiss={this._hideAddContentModal}
            />
            <LayersModal
              visible={this.state.layersModalVisible}
              onDismiss={this._hideLayersModal}
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
