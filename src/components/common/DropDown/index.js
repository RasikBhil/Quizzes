import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {View, StyleSheet} from 'react-native';

const DropDown = ({data, onChangeItem}) => {
  return (
    <View style={s.container}>
      <RNPickerSelect
        onValueChange={(value) => console.log(value)}
        items={data}
        Icon={() => {
          return <View style={s.downIcon} />;
        }}
      />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    marginVertical: 5,
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
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
