import * as React from 'react';
import { Modal, Text } from 'react-native-paper';

const AddContentModal = props => {
  const { visible, onDismiss } = props;
  return (
    <Modal visible={visible} onDismiss={onDismiss}>
      <Text>Example Modal</Text>
    </Modal>
  );
};

export default AddContentModal;
