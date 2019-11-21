import React from 'react';
import { StyleSheet, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const Icon = props => {
  const { size, color, name } = props;
  return (
    <View style={styles.iconAlignment}>
      <FontAwesome5 name={name} size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconAlignment: {
    alignItems: 'center',
  },
});
