import React, {useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Image} from 'react-native';
import {connect} from 'react-redux';
import HTML from 'react-native-render-html';
import QuestionMark from '../../assets/icons/question.png';
import Answers from './widget/Answers';
import {scale} from 'react-native-size-matters';
import {colors, fonts} from '../../theme';
import {countScore, clearState, getQuestions} from '../../store/actions';
import {SkypeIndicator} from 'react-native-indicators';
import ScoreBoard from './widget/ScoreBoard';
import {ModelContainer} from '../common';

const QuizScreen = ({
  questions,
  countScore,
  navigation,
  clearState,
  score,
  getQuestions,
  selected,
}) => {
  const [currentQue, setCurrentQue] = useState(0);
  const [press, setPress] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);

  console.log('SELECTED::', selected);

  const onAnswer = (answer) => {
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
      }, 1000);
    }
  };

  const onClose = () => {
    setVisible(false);
    navigation.navigate('Landing');
    clearState();
  };

  const onPlayAgain = () => {
    setVisible(false);
    setCurrentQue(0);
    clearState();
    setLoading(true);
    const func = async () => {
      try {
        getQuestions(selected);
      } finally {
        setLoading(false);
      }
    };
    func();
  };

  const renderComponent = () => {
    if (!isLoading && questions.length > 0) {
      return (
        <SafeAreaView style={{flex: 1}}>
          <View style={s.container}>
            <View style={s.queContainer}>
              <Image style={s.image} source={QuestionMark} />
              <HTML
                html={questions[currentQue]?.question}
                baseFontStyle={{fontSize: 16, fontFamily: fonts.lato_bold}}
              />
            </View>
            <Answers
              onPress={onAnswer}
              press={press}
              correctAnswer={questions[currentQue].correct_answer}
              answers={questions[currentQue].answers}
            />
            {/*<ScoreBoard />*/}
            <View>
              <ModelContainer
                score={score}
                total={questions.length}
                onPlayAgain={() => onPlayAgain()}
                isVisible={isVisible}
                onClose={() => onClose()}
              />
            </View>
          </View>
        </SafeAreaView>
      );
    } else {
      return (
        <SafeAreaView style={{flex: 1}}>
          <SkypeIndicator />
        </SafeAreaView>
      );
    }
  };

  return renderComponent();
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
const mapStateToProps = ({Quiz: {questions, score, selected}}) => ({
  questions,
  score,
  selected,
});

export default connect(mapStateToProps, {countScore, clearState, getQuestions})(
  QuizScreen,
);
