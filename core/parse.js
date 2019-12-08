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

export class Waypoint extends Parse.Object {
  constructor({ lat, lon, name, symbol }) {
    super('Waypoint');

    if (lat && lon) {
      const geometry = new Parse.GeoPoint({ latitude: lat, longitude: lon });
      this.set('geometry', geometry);
    }

    if (name) {
      this.set('name', name);
    }
    if (symbol) {
      this.set('symbol', symbol);
    }
  }
}
Parse.Object.registerSubclass('Waypoint', Waypoint);

export { Parse };
