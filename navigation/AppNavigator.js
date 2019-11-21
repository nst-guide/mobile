import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MenuDrawerNavigator from './MenuDrawerNavigator';
import AuthNavigator from "./AuthNavigator"

export default createAppContainer(
  createSwitchNavigator(
    {
      App: MenuDrawerNavigator,
      Auth: AuthNavigator,
    },
    {
      initialRouteName: 'App',
    }
  )
);
