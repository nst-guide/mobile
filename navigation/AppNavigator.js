import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AppStackNavigator from './AppStackNavigator';
import AuthNavigator from './AuthNavigator';

export default createAppContainer(
  createSwitchNavigator(
    {
      App: AppStackNavigator,
      Auth: AuthNavigator,
    },
    {
      initialRouteName: 'App',
    },
  ),
);
