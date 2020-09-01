import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {category} from './categoryData';
import {DropDown, Neomorph} from '../../common';
import {difficulty} from './difficultyData';
import {type} from './typeData';
import {scale} from 'react-native-size-matters';

const Form = () => {
  return (
    <View style={{paddingHorizontal: '10%', flex: 1}}>
      <View style={s.pickerContainer}>
        <Text style={s.labelText}>{'NUMBER OF QUESTIONS:'}</Text>
        <View style={s.inputContainer}>
          <TextInput
            style={{padding: 0, fontSize: scale(16)}}
            keyboardType={'numeric'}
            placeholder={'enter questions'}
          />
        </View>
        {/*<Neomorph inner style={s.inputContainer}>*/}
        {/*  <TextInput keyboardType={'numeric'} placeholder={'enter questions'} />*/}
        {/*</Neomorph>*/}
      </View>
      <View style={s.pickerContainer}>
        <Text style={s.labelText}>{'SELECT CATEGORY:'}</Text>
        <DropDown data={category} />
      </View>
      <View style={s.pickerContainer}>
        <Text style={s.labelText}>{'SELECT DIFFICULTY:'}</Text>
        <DropDown data={difficulty} />
      </View>
      {/*<View style={s.pickerContainer}>*/}
      <Text style={s.labelText}>{'SELECT TYPE:'}</Text>
      <DropDown data={type} />
      {/*</View>*/}
    </View>
  );
};

const s = StyleSheet.create({
  pickerContainer: {
    marginVertical: scale(10),
  },
  labelText: {
    fontWeight: 'bold',
  },
  inputContainer: {
    marginTop: 5,
    // width: '100%',
    backgroundColor: '#FFFFFF',
    padding: scale(8),
    borderRadius: 5,
  },
});

export default Form;
