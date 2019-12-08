import Parse from 'parse/react-native';
import AsyncStorage from '@react-native-community/async-storage';
Parse.setAsyncStorage(AsyncStorage);

import { PARSE_APP_ID, PARSE_SERVER_URL } from 'react-native-dotenv';

Parse.initialize(PARSE_APP_ID);
Parse.serverURL = PARSE_SERVER_URL;
Parse.User.enableUnsafeCurrentUser();
Parse.enableLocalDatastore();

export class User extends Parse.User {
  constructor({ username, password, email }) {
    super('User');

    this.set('username', username);
    this.set('password', password);
    if (email) this.set('email', email);
  }
}
Parse.Object.registerSubclass('User', User);

export const Waypoint = Parse.Object.extend('Waypoint')
export { Parse };
