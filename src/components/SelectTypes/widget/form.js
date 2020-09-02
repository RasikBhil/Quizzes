import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {categoryData} from './categoryData';
import {DropDown, Neomorph} from '../../common';
import {difficultyData} from './difficultyData';
import {typeData} from './typeData';
import {scale} from 'react-native-size-matters';
import {colors, fonts} from '../../../theme';
import {getQuestions, prevSelected} from '../../../store/actions';
import {connect} from 'react-redux';

const dropDown = [
  {
    key: 0,
    data: categoryData,
    type: 'CATEGORY',
    name: 'SELECT CATEGORY:',
  },
  {
    key: 1,
    data: difficultyData,
    type: 'DIFFICULTY',
    name: 'SELECT DIFFICULTY:',
  },
  {
    key: 2,
    data: typeData,
    type: 'TYPE',
    name: 'SELECT TYPE:',
  },
];

const Form = ({getQuestions, navigation, prevSelected}) => {
  const [category, setCategory] = useState(9);
  const [difficulty, setDifficulty] = useState('easy');
  const [type, setType] = useState('multiple');
  const [amount, setAmount] = useState('10');

  const onItemChange = (value, key) => {
    switch (key) {
      case 'CATEGORY':
        console.log('CATEGORY::', value);
        setCategory(value);
        break;
      case 'DIFFICULTY':
        console.log('DIFFICULTY', value);
        setDifficulty(value);
        break;
      case 'TYPE':
        console.log('TYPE', value);
        setType(value);
        break;
    }
  };

  const onStart = () => {
    const func = async () => {
      try {
        getQuestions({amount, category, difficulty, type});
        prevSelected({amount, category, difficulty, type});
      } finally {
        navigation.navigate('Quiz');
      }
    };
    func();
  };

  const onInputChange = (question) => {
    console.log('question', question);
    setAmount(question);
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={{paddingHorizontal: '10%', flex: 1}}>
          <View style={s.pickerContainer}>
            <Text style={s.labelText}>{'NUMBER OF QUESTIONS:'}</Text>
            <View style={s.inputContainer}>
              <TextInput
                style={{padding: 0, fontSize: scale(16)}}
                keyboardType={'numeric'}
                value={amount}
                placeholder={'enter questions'}
                onChangeText={onInputChange}
              />
            </View>
          </View>
          {dropDown.map((item) => {
            return (
              <View key={item.key} style={s.pickerContainer}>
                <Text style={s.labelText}>{item.name}</Text>
                <DropDown
                  onChangeItem={(value) => onItemChange(value, item.type)}
                  data={item.data}
                  value={
                    item.type === 'CATEGORY'
                      ? category
                      : item.type === 'DIFFICULTY'
                      ? difficulty
                      : item.type === 'TYPE'
                      ? type
                      : null
                  }
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
      <View style={s.buttonContainer}>
        <TouchableOpacity onPress={() => onStart()}>
          <Neomorph style={s.button}>
            <Text style={s.buttonText}>{'START'}</Text>
          </Neomorph>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  pickerContainer: {
    marginVertical: scale(10),
  },
  labelText: {
    fontFamily: fonts.bold,
  },
  inputContainer: {
    marginTop: 5,
    backgroundColor: '#FFFFFF',
    padding: scale(8),
    borderRadius: 5,
  },
  buttonContainer: {
    flex: 0,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: scale(20),
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
  },
  button: {
    alignItems: 'center',
    marginTop: 0,
    backgroundColor: colors.blueViolate,
    height: scale(50),
    borderTopStartRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontFamily: fonts.bold,
  },
});

export default connect(null, {getQuestions, prevSelected})(Form);
