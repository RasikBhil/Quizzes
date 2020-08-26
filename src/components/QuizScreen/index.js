import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

const QuizScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'rgb(222,233,253)'}}>
        <Text>{'Quiz Screen'}</Text>
      </View>
    </SafeAreaView>
  );
};

export default QuizScreen;
