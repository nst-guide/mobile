import Parse from 'parse/react-native';
import { AsyncStorage } from 'react-native';
Parse.setAsyncStorage(AsyncStorage);

import { PARSE_APP_ID, PARSE_SERVER_URL } from 'react-native-dotenv';

Parse.initialize(PARSE_APP_ID);
Parse.serverURL = PARSE_SERVER_URL;
Parse.User.enableUnsafeCurrentUser();

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
  constructor({ lat, lon, name, trail_mile }) {
    super('Waypoint');

    if (lat && lon) {
      const point = new Parse.GeoPoint({ latitude: lat, longitude: lon });
      this.set('point', point);
    }

    if (name) {
      this.set('name', name);
    }
    if (trail_mile) {
      this.set('trail_mile', trail_mile);
    }
  }
}
Parse.Object.registerSubclass('Waypoint', Waypoint);
