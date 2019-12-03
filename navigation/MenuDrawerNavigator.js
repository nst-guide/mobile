import React from 'react';

import { SafeAreaView } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { ScrollView } from 'react-native';
import { Drawer } from 'react-native-paper';

import {
  HomeScreen,
  RoutesScreen,
  AuthStartScreen,
  SettingsScreen,
  DownloadsScreen,
} from '../screens';

// If the current route is the same as the route called in
// `props.navigation.navigate()`, nothing happens because that screen is already
// on top. Because of that, the drawer doesn't close, because no actions are
// happening. In order to close the drawer if the user selects the current
// screen from the drawer, I call `props.navigation.closeDrawer()` after
// navigating to a given route.

const MenuDrawerNavigator = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Downloads: { screen: DownloadsScreen },
    Settings: { screen: SettingsScreen },
    AuthStart: { screen: AuthStartScreen },
    Routes: { screen: RoutesScreen },
  },
  {
    contentComponent: props => (
      <ScrollView>
        <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
          <Drawer.Item
            icon="map"
            label="Map"
            active="true"
            onPress={() => {
              props.navigation.navigate('Home');
              props.navigation.closeDrawer();
            }}
          />
          <Drawer.Item
            icon="download"
            label="Downloads"
            active="true"
            onPress={() => {
              props.navigation.navigate('Downloads');
              props.navigation.closeDrawer();
            }}
          />
          <Drawer.Item
            icon="route"
            label="Routes"
            active="true"
            onPress={() => {
              props.navigation.navigate('Routes');
              props.navigation.closeDrawer();
            }}
          />
          <Drawer.Item
            icon="cog"
            label="Settings"
            active="true"
            onPress={() => {
              props.navigation.navigate('Settings');
              props.navigation.closeDrawer();
            }}
          />
          <Drawer.Item
            icon="sign-in-alt"
            label="Sign In"
            active="true"
            onPress={() => {
              props.navigation.navigate('AuthStart');
              props.navigation.closeDrawer();
            }}
          />
        </SafeAreaView>
      </ScrollView>
    ),
  },
);
export default MenuDrawerNavigator;
