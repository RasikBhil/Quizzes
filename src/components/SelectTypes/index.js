import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {colors} from '../../theme';
import Form from './widget/form';

const SelectTypes = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={s.container}>
        {/*<Text>{'SELECT TYPES'}</Text>*/}
        <Form />
      </View>
    </SafeAreaView>
  );
};

const s = StyleSheet.create({
  container: {
    backgroundColor: colors.jordyBlue,
    flex: 1,
  },
});

export default SelectTypes;
