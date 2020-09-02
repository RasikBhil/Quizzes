import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {colors} from '../../theme';
import Form from './widget/form';
import {Neomorph} from '../common';
import Earth from '../../assets/icons/world.png';
import {scale} from 'react-native-size-matters';

const SelectTypes = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={s.container}>
        <View style={{alignItems: 'center', paddingVertical: scale(20)}}>
          <Image
            style={{height: scale(128), width: scale(128)}}
            source={Earth}
          />
        </View>
        <Form navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

const s = StyleSheet.create({
  container: {
    backgroundColor: colors.jordyBlue,
    flex: 1,
  },
  buttonContainer: {
    flex: 0,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: scale(20),
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
  },
  button: {
    alignItems: 'center',
    marginTop: 0,
    backgroundColor: colors.blueViolate,
    height: scale(50),
    borderTopStartRadius: 5,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
});

export default SelectTypes;
