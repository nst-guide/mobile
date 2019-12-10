import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { WebView } from 'react-native-webview';

const WebViewComponent = props => {
  return <WebView source={{ uri: props.uri }} />;
};

// TODO: change navigation.toggleDrawer to goBack()?
class WebviewScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.BackAction
            onPress={() => this.props.navigation.toggleDrawer()}
          />
          <Appbar.Content title="Webview" />
        </Appbar.Header>
        <WebViewComponent
          style={styles.webView}
          uri="https://en.wikipedia.org/wiki/Yosemite_National_Park"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  webView: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});

export default WebviewScreen;
