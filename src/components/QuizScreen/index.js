import React, {useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Image} from 'react-native';
import {connect} from 'react-redux';
import HTML from 'react-native-render-html';
import QuestionMark from '../../assets/icons/question.png';
import Answers from './widget/Answers';
import {scale} from 'react-native-size-matters';
import {colors} from '../../theme';
import {countScore} from '../../store/actions';
import ScoreBoard from './widget/ScoreBoard';
import {ModelContainer} from '../common';

const QuizScreen = ({questions, countScore}) => {
  const [currentQue, setCurrentQue] = useState(0);
  const [press, setPress] = useState(false);
  const [isVisible, setVisible] = useState(false);

  const onAnswer = (answer) => {
    console.log('ANSWER _____', answer);
    countScore(answer);
    setPress(true);
    if (currentQue !== 9) {
      setTimeout(() => {
        setCurrentQue(currentQue + 1);
        setPress(false);
      }, 1000);
    } else {
      setTimeout(() => {
        setPress(false);
        setVisible(true);
        // alert('Quiz Finished');
      }, 1000);
    }
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={s.container}>
        <View style={s.queContainer}>
          <Image style={s.image} source={QuestionMark} />
          <HTML
            html={questions[currentQue].question}
            baseFontStyle={{fontSize: 16, fontWeight: 'bold'}}
          />
        </View>
        <Answers
          onPress={onAnswer}
          press={press}
          correctAnswer={questions[currentQue].correct_answer}
          answers={questions[currentQue].answers}
        />
        <ScoreBoard />
        <View>
          <ModelContainer isVisible={isVisible} onClose={() => onClose()} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blueViolate,
    paddingTop: scale(100),
  },
  queContainer: {
    backgroundColor: colors.yellow,
    padding: 20,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 7,
    flex: 0,
  },
  image: {
    height: scale(60),
    width: scale(60),
    alignSelf: 'center',
    marginBottom: 10,
  },
});
const mapStateToProps = ({Quiz: {questions}}) => ({questions});

export default connect(mapStateToProps, {countScore})(QuizScreen);
