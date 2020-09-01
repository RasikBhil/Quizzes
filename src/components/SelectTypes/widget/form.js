import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {category} from './categoryData';
import {DropDown} from '../../common';
import {difficulty} from './difficultyData';
import {type} from './typeData';
import {scale} from 'react-native-size-matters';

const Form = () => {
  return (
    <View style={{paddingHorizontal: '10%', flex: 1, marginTop: scale(100)}}>
      <View style={s.pickerContainer}>
        <Text style={s.labelText}>{'NUMBER OF QUESTIONS:'}</Text>
        <View style={s.inputContainer}>
          <TextInput keyboardType={'numeric'} placeholder={'enter questions'} />
        </View>
      </View>
      <View style={s.pickerContainer}>
        <Text style={s.labelText}>{'SELECT CATEGORY:'}</Text>
        <DropDown data={category} />
      </View>
      <View style={s.pickerContainer}>
        <Text style={s.labelText}>{'SELECT DIFFICULTY:'}</Text>
        <DropDown data={difficulty} />
      </View>
      <View style={s.pickerContainer}>
        <Text style={s.labelText}>{'SELECT TYPE:'}</Text>
        <DropDown data={type} />
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  pickerContainer: {
    marginVertical: 10,
  },
  labelText: {
    fontWeight: 'bold',
  },
  inputContainer: {
    marginTop: 5,
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
  },
});

export default Form;
