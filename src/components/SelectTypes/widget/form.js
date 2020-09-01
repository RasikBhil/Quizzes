import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {categoryData} from './categoryData';
import {DropDown, Neomorph} from '../../common';
import {difficultyData} from './difficultyData';
import {typeData} from './typeData';
import {scale} from 'react-native-size-matters';
import {colors} from '../../../theme';
import {getQuestions} from '../../../store/actions';
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

const Form = ({getQuestions, navigation}) => {
  const [category, setCategory] = useState(9);
  const [difficulty, setDifficulty] = useState('easy');
  const [type, setType] = useState('multiple');

  // const onCategoryChange = (value) => {
  //   console.log('CATEGORY::', value);
  //   setCategory(value);
  // };
  // const onDifficultyChange = (value) => {
  //   console.log('DIFFICULTY::', value);
  //   setDifficulty(value);
  // };
  //
  // const onTypeChange = (value) => {
  //   console.log('TYPE::', value);
  //   setType(value);
  // };

  const onItemChange = (value, key) => {
    switch (key) {
      case 'CATEGORY':
        console.log('CATEGORY::', value);
        setCategory(value);
        break;
      case 'DIFFICULTY':
        console.log('DIFFICULTY', value);
        setDifficulty(value);
      case 'TYPE':
        console.log('TYPE', value);
        setType(value);
    }
  };

  const onStart = () => {
    const func = async () => {
      try {
        getQuestions({category, difficulty, type});
      } finally {
        navigation.navigate('Quiz');
      }
    };
    func();
  };

  return (
    <View style={{flex: 1}}>
      <View style={{paddingHorizontal: '10%', flex: 1}}>
        <View style={s.pickerContainer}>
          <Text style={s.labelText}>{'NUMBER OF QUESTIONS:'}</Text>
          <View style={s.inputContainer}>
            <TextInput
              style={{padding: 0, fontSize: scale(16)}}
              keyboardType={'numeric'}
              placeholder={'enter questions'}
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
              />
            </View>
          );
        })}
      </View>
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
    fontWeight: 'bold',
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
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
});

export default connect(null, {getQuestions})(Form);
