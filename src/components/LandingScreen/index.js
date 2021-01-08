import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Neomorph} from '../common';
import {colors, fonts} from '../../theme';

const LandingScreen = ({navigation}) => {
  const ContentView = () => {
    return (
      <View>
        <Neomorph style={{height: 40, alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.navigate('SelectTypes')}>
            <Text style={{fontFamily: fonts.bold}}>{'START QUIZ'}</Text>
          </TouchableOpacity>
        </Neomorph>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={s.container}>{ContentView()}</View>
    </SafeAreaView>
  );
};

const s = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: colors.jordyBlue,
  },
});

export default LandingScreen;
