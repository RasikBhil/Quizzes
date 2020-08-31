import React from 'react';
import {
  View,
  Modal,
  TouchableOpacity,
  Text,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colors} from '../../../theme';
import {Neomorph} from '../index';

const ModelContainer = ({isVisible, onClose}) => {
  return (
    <Modal transparent={true} visible={isVisible}>
      <SafeAreaView style={s.container}>
        <View style={s.childContainer}>
          <TouchableOpacity style={s.button} onPress={onClose}>
            <Neomorph style={s.neoButton}>
              <Text style={s.buttonText}>{'Play again ?'}</Text>
            </Neomorph>
          </TouchableOpacity>
          <TouchableOpacity style={s.button} onPress={onClose}>
            <Neomorph style={s.neoButton}>
              <Text style={s.buttonText}>{'Close'}</Text>
            </Neomorph>
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
    backgroundColor: colors.jordyBlue,
    width: '80%',
    alignSelf: 'center',
    paddingVertical: scale(20),
    paddingHorizontal: scale(10),
    borderRadius: scale(7),
  },
  button: {
    alignItems: 'center',
    //  backgroundColor: colors.yellow,
    alignSelf: 'center',
  },
  neoButton: {
    width: scale(150),
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
  },
});
export default ModelContainer;
