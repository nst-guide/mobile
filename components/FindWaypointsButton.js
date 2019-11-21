import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB, Portal, Provider } from 'react-native-paper';

export default class FindWaypointsButton extends React.Component {
  state = {
    open: false,
  };

  render() {
    return (
      <FAB.Group
        // style={styles.fab}
        open={this.state.open}
        icon="search"
        actions={[
          {
            icon: 'campground',
            label: 'Campsites',
            onPress: () => console.log('Find campsites'),
          },
          {
            icon: 'tint',
            label: 'Water',
            onPress: () => console.log('Find water'),
          },
          {
            icon: 'city',
            label: 'Towns',
            onPress: () => console.log('Find towns'),
          },
        ]}
        onStateChange={({ open }) => this.setState({ open })}
        onPress={() => {
          if (this.state.open) {
            // do something if the speed dial is open
          }
        }}
      />
    );
  }
}

// const FindWaypointsButton = props => (
//   <FAB {...props} style={styles.fab} small icon="search" />
// );

// const styles = StyleSheet.create({
//   fab: {
//     position: "absolute",
//     margin: 16,
//     right: 10,
//     bottom: 30
//   }
// });
