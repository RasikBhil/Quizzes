import * as Types from '../types';
import getRandomAns from '../../utils/getRandomAns';

const intialState = {
  questions: [],
  score: 0,
  selected: {},
};

const reducer = (state = intialState, action) => {
  console.log('LOGGER', action);
  switch (action.type) {
    case Types.GET_QUESTIONS_SUCCESS:
      const {results} = action.payload;
      let question;
      if (results) {
        question = results.map((item) => {
          const concatAns = [...item.incorrect_answers, item.correct_answer];
          const answers = getRandomAns(concatAns);
          return {...item, answers};
        });
      }
      return {...state, questions: question};
    case Types.COUNT_SCORE:
      return {...state, score: action.payload};
    case Types.CLEAR_STATE:
      return {...intialState};
    case Types.SAVE_TYPES:
      return {...state, selected: {...action.payload}};
    default:
      return {...state};
  }
};

export default reducer;
