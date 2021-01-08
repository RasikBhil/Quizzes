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

const ModelContainer = ({isVisible, onClose, score, onPlayAgain, total}) => {
  return (
    <Modal transparent={true} visible={isVisible}>
      <SafeAreaView style={s.container}>
        <View style={s.childContainer}>
          <View style={s.button}>
            <Neomorph inner style={s.scoreContainer}>
              <Text style={s.scoreText}>{'SCOREBOARD'}</Text>
              <Text style={s.score}>{`SCORE: ${score}/${total}`}</Text>
            </Neomorph>
          </View>
          <TouchableOpacity style={s.button} onPress={onPlayAgain}>
            <Neomorph inner style={s.neoButton}>
              <Text style={s.buttonText}>{'Play again ?'}</Text>
            </Neomorph>
          </TouchableOpacity>
          <TouchableOpacity style={s.button} onPress={onClose}>
            <Neomorph inner style={s.neoButton}>
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
    alignSelf: 'center',
  },
  neoButton: {
    width: scale(150),
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
  },
  scoreContainer: {
    width: scale(250),
    height: scale(100),
    marginTop: 0,
    justifyContent: 'flex-start',
    paddingVertical: 20,
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  score: {
    marginTop: 10,
    fontWeight: 'bold',
  },
});
export default ModelContainer;
