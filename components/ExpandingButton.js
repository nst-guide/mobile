import React from "react";
import View from "react-native";
import Collapsible from "react-native-collapsible";
import { Text, Button } from "react-native-paper";



const ExpandingButton = (props) => {
  return (
    <Collapsible collapsed={props.collapsed}>
      <Text>This is collapsed text.</Text>
    </Collapsible>
  );
}
export default ExpandingButton;
