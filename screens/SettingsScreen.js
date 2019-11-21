import React from "react";
import { View, ScrollView } from "react-native";
import { Appbar, Text, Button, List, Checkbox } from "react-native-paper";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import ExpandingButton from "../components/ExpandingButton";
import {SafeAreaView} from "react-navigation";


class SettingsAccordion extends React.Component {
  state = {
    expanded: true
  };

  _handlePress = () =>
    this.setState({
      expanded: !this.state.expanded
    });

  render() {
    return (
      <List.Section title="Accordions">
        <List.Accordion
          title="Uncontrolled Accordion"
          left={props => <List.Icon {...props} icon="folder" />}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>

        <List.Accordion
          title="Controlled Accordion"
          left={props => <List.Icon {...props} icon="folder" />}
          expanded={this.state.expanded}
          onPress={this._handlePress}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
      </List.Section>
    );
  }
}


class SettingsScreen extends React.Component {
  state = {
    isCollapsed: true
  };

  static navigationOptions = {
    drawerLabel: "Settings",
    drawerIcon: ({ tintColor }) => <FontAwesome5 name="cog" color={tintColor} />
  };

  handleClick() {
    console.log(this.state);
    console.log(this.state.isCollapsed);
    console.log(!this.state.isCollapsed);
    this.setState({ isCollapsed: !this.state.isCollapsed });
  }

  render() {
    return (
      <View styles={{ flex: 1 }}>
        <Appbar.Header>
          <Appbar.BackAction
            onPress={() => this.props.navigation.toggleDrawer()}
          />
          <Appbar.Content title="Settings" />
        </Appbar.Header>

        <ScrollView styles={{ flex: 1 }}>
          <Button
            icon="camera"
            mode="contained"
            onPress={() => this.handleClick()}
          >
            Expand
          </Button>
          <ExpandingButton collapsed={this.state.isCollapsed} />

          <SettingsAccordion />
          <SettingsAccordion />
          <SettingsAccordion />
          <SettingsAccordion />
        </ScrollView>
      </View>
    );
  }
}
export default SettingsScreen;
