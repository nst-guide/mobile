import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Map } from "../components/Map";
import DrawerButton from "../components/DrawerButton";
import AddContentButton from "../components/AddContentButton";
import FindWaypointsButton from "../components/FindWaypointsButton";
import { FAB, Portal, Provider } from "react-native-paper";
import ExpandingButton from "../components/ExpandingButton";

// TODO: Debug why adding <Portal> stops the FontAwesome icons from working
// I think you need to use <Portal> to get the FAB group to render at the right place on top of other objects
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elevationCollapsed: true
    };
  }

  toggleElevation() {
    console.log('toggling elevation')
    this.setState({ elevationCollapsed: !this.state.elevationCollapsed });
  }

  render() {
    return (
      <View style={styles.container}>
        <Map style={styles.map} />
        <DrawerButton onPress={() => this.props.navigation.toggleDrawer()} />
        <AddContentButton onPress={() => console.log("add content")} />

        <FAB
          small
          style={styles.elevationFAB}
          icon="mountain"
          label="Elevation"
          onPress={() => this.toggleElevation()}
        />

        <FAB style={styles.layersFAB} icon="layer-group" />

        <FAB style={styles.locatorFAB} icon="location-arrow" />

        <FindWaypointsButton onPress={() => console.log("Find waypoints")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  layersFAB: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 165
  },
  locatorFAB: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 100
  },
  elevationFAB: {
    position: "absolute",
    margin: 16,
    left: 10,
    bottom: 40
  },
  map: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
