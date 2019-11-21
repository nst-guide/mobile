import * as React from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";

const AddContentButton = props => (
  <FAB {...props} style={styles.fab} small icon="plus" />
);

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 10,
    top: 30
  }
});

export default AddContentButton;
