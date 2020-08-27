import React from 'react';
import HTML from 'react-native-render-html';
import {colors} from '../../../../theme';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

const Answers = ({answers, onPress, correctAnswer, press}) => {
  return (
    <View style={s.mainContainer}>
      {answers.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={{
              ...s.container,
              backgroundColor: press
                ? correctAnswer === item
                  ? colors.chartreuse
                  : colors.amaranthPink
                : colors.jordyBlue,
            }}>
            <View>
              <HTML
                baseFontStyle={{fontSize: 14, fontWeight: 'bold'}}
                html={item}
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const s = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
    paddingHorizontal: '5%',
    justifyContent: 'space-between',
    marginTop: 30,
    flex: 0,
  },
  container: {
    width: '40%',
    backgroundColor: colors.jordyBlue,
    paddingVertical: 10,
    paddingHorizontal: 5,
    alignItems: 'center',
    marginVertical: 5,
    borderRadius: 4,
  },
});
export default Answers;
