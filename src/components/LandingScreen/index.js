import React, {useEffect} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {Neomorph} from '../common';
import {getQuestions} from '../../store/actions';
import getRandomAns from '../../utils/getRandomAns';
import {connect} from 'react-redux';
const LandingScreen = ({navigation, getQuestions, questions}) => {
  console.log('---------- SCREEN BEFORE', questions);

  // if (questions?.length !== 0) {
  //   questions.map((item) => {
  //     const ans = [...item.incorrect_answers, item.correct_answer];
  //     console.log('RANDOM ANS', getRandomAns(ans));
  //     //console.log('------ANS', ans);
  //   });
  // }

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

const mapStateToProps = ({Quiz: {questions}}) => ({questions});

export default connect(mapStateToProps, {getQuestions})(LandingScreen);
