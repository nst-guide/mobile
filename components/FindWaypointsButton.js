import React from 'react';
import { FAB } from 'react-native-paper';

export default class FindWaypointsButton extends React.Component {
  state = {
    open: false,
  };

  render() {
    return (
      <FAB.Group
        open={this.state.open}
        icon={this.state.open ? 'times' : 'search'}
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
      />
    );
  }
}
