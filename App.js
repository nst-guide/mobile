import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import AppContainer from './navigation/AppNavigator';
import { theme } from './constants/Theme';
import { Icon } from './components/Icon';

// TODO: Check out how to pass a theme to PaperProvider:
// https://github.com/callstack/react-native-paper-login-template/blob/master/App.tsx
// <Provider theme={theme}>

export default class App extends React.Component {
  render() {
    return (
      <PaperProvider
        settings={{
          icon: props => <Icon name={props.icon} {...props} />,
        }}
        theme={theme}
      >
        <AppContainer />
      </PaperProvider>
    );
  }
}
