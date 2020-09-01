import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Neomorph} from '../common';
import {getQuestions} from '../../store/actions';
import {SkypeIndicator} from 'react-native-indicators';
import {connect} from 'react-redux';
import {colors} from '../../theme';

const LandingScreen = ({navigation, getQuestions}) => {
  const [Loading, setLoading] = useState(false);

  const onStartQuiz = () => {
    const func = async () => {
      try {
        setLoading(true);
        await getQuestions();
      } finally {
        setLoading(false);
        navigation.navigate('Quiz');
      }
    };
    func();
  };

  const ContentView = () => {
    if (!Loading) {
      return (
        <View>
          <Neomorph style={{height: 40, alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SelectTypes')}>
              <Text style={{fontWeight: 'bold'}}>{'START QUIZ'}</Text>
            </TouchableOpacity>
          </Neomorph>
          {/*<Neomorph style={{height: 40, alignItems: 'center'}}>*/}
          {/*  <TouchableOpacity onPress={() => onStartQuiz()}>*/}
          {/*    <Text style={{fontWeight: 'bold'}}>{'RESUME'}</Text>*/}
          {/*  </TouchableOpacity>*/}
          {/*</Neomorph>*/}
        </View>
      );
    } else {
      return <SkypeIndicator />;
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={s.container}>{ContentView()}</View>
    </SafeAreaView>
  );
};

const s = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: colors.jordyBlue,
  },
});

const mapStateToProps = ({Quiz: {questions}}) => ({questions});

export default connect(mapStateToProps, {getQuestions})(LandingScreen);
