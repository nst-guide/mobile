import * as React from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";

const DrawerButton = props => (
  <FAB
    {...props}
    style={styles.fab}
    small
    icon="ellipsis-h"
  />
);

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    left: 10,
    top: 30
  }
});

export default DrawerButton;
