import React from 'react';
import HTML from 'react-native-render-html';
import {colors, fonts} from '../../../../theme';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

const Answers = ({answers, onPress, correctAnswer, press}) => {
  return (
    <View style={s.mainContainer}>
      {answers?.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => onPress(correctAnswer === item)}
            style={{
              ...s.container,
              backgroundColor: press
                ? correctAnswer === item
                  ? colors.chartreuse
                  : colors.amaranthPink
                : colors.jordyBlue,
            }}>
            <View>
              <HTML baseFontStyle={s.optionsFonts} html={item} />
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
    flex: 1,
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
  optionsFonts: {
    fontSize: 14,
    fontFamily: fonts.lato_bold,
  },
});
export default Answers;
