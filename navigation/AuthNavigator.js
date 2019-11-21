import { createStackNavigator } from 'react-navigation-stack';

import {
  AuthStartScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
} from '../screens';

const AuthNavigator = createStackNavigator(
  {
    AuthStart: { screen: AuthStartScreen },
    Login: { screen: LoginScreen },
    Register: { screen: RegisterScreen },
    ForgotPassword: { screen: ForgotPasswordScreen },
  },
  {
    initialRouteName: 'AuthStart',
    headerMode: 'none',
  },
);

export default AuthNavigator;
