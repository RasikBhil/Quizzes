import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {View, StyleSheet} from 'react-native';
import {Neomorph} from '../index';
import {scale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';

const DropDown = ({data, onChangeItem}) => {
  return (
    <RNPickerSelect
      onValueChange={onChangeItem}
      items={data}
      useNativeAndroidPickerStyle={false}
      style={pickerSelectStyles}
      Icon={() => {
        return <Icon name={'chevron-down'} size={scale(20)} />;
      }}
    />
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    marginVertical: 7,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 4,
    color: 'black',
    backgroundColor: '#FFFFFF',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    marginVertical: 7,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  iconContainer: {
    top: scale(16),
    right: 5,
  },
});

const s = StyleSheet.create({
  container: {
    marginVertical: scale(5),
    //padding: scale(10),
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
  downIcon: {
    backgroundColor: 'transparent',
    borderTopWidth: 5,
    borderTopColor: 'gray',
    borderRightWidth: 5,
    borderRightColor: 'transparent',
    borderLeftWidth: 5,
    borderLeftColor: 'transparent',
    width: 0,
    height: 0,
    marginTop: 6,
  },
});
export default DropDown;
