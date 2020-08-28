import React from 'react';
import {
  View,
  Modal,
  TouchableOpacity,
  Text,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

const ModelContainer = ({isVisible, onClose}) => {
  return (
    <Modal transparent={true} visible={isVisible}>
      <SafeAreaView style={s.container}>
        <View style={s.childContainer}>
          <Text>{'MODEL'}</Text>
          <TouchableOpacity onPress={onClose}>
            <Text>{'CLOSE'}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000004D',
    justifyContent: 'center',
  },
  childContainer: {
    backgroundColor: '#FFFFFF',
  },
});
export default ModelContainer;
