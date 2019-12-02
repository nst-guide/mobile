import * as React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Modal, Text } from 'react-native-paper';

const layers = [
  { id: 0, text: 'Wilderness Boundaries' },
  { id: 1, text: 'National Park Boundaries' },
  { id: 2, text: 'National Forest Boundaries' },
  { id: 3, text: 'Lightning' },
  { id: 4, text: 'Transit' },
  { id: 5, text: 'Historical Wildfires' },
  { id: 6, text: 'Current Wildfires' },
  { id: 7, text: 'Air Quality' },
];

const renderItem = ({ item }) => {
  return <Text style={styles.row}>{item.text}</Text>;
};

const extractKey = ({ id }) => id;

const LayersModal = props => {
  const { visible, onDismiss } = props;
  return (
    <Modal
      contentContainerStyle={styles.modalContent}
      visible={visible}
      onDismiss={onDismiss}
    >
      <FlatList
        style={styles.container}
        data={layers}
        renderItem={renderItem}
        keyExtractor={extractKey}
      />
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContent: {
    height: 400,
    width: 300,
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
});

export default LayersModal;

