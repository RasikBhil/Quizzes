import React, {useEffect} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {Neomorph} from '../common';
import {getQuestions} from '../../store/actions';

import {connect} from 'react-redux';
const LandingScreen = ({navigation, getQuestions}) => {

  useEffect(() => {
    getQuestions();
  }, []);


  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          backgroundColor: 'rgb(222,233,253)',
        }}>
        <Neomorph style={{height: 40, alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
            <Text style={{fontWeight: 'bold'}}>{'START QUIZ'}</Text>
          </TouchableOpacity>
        </Neomorph>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = ({questions}) => ({questions});

export default connect(mapStateToProps, {getQuestions})(LandingScreen);
