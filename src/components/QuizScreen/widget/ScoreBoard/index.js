import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {connect} from 'react-redux';
const ScoreBoard = ({score}) => {
  return (
    <View style={{flex: 0.5}}>
      <View style={s.container}>
        <Text style={s.textbold}>{'SCOREBOARD'}</Text>
        <View style={s.scoreContainer}>
          <Text style={{fontWeight: 'bold'}}>{`SCORE : ${score}/10`}</Text>
        </View>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    paddingVertical: 5,
    alignItems: 'center',
    backgroundColor: 'cyan',
    width: '90%',
    alignSelf: 'center',
    marginTop: scale(20),
    borderRadius: 5,
  },
  textbold: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  scoreContainer: {
    paddingVertical: 10,
  },
});

const mapStateToProps = ({Quiz: {score}}) => ({score});

export default connect(mapStateToProps, {})(ScoreBoard);
