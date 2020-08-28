import * as Types from '../types';
import axios from 'axios';

export const getQuestions = () => (dispatch) => {
  const getPromise = async () => {
    const {data} = await axios.get(
      'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple',
    );
    return data;
  };
  return dispatch({
    type: Types.GET_QUESTIONS,
    payload: getPromise(),
  });
};

export const countScore = (answer) => (dispatch, getState) => {
  let score = getState().Quiz.score;
  if (answer) {
    score = getState().Quiz.score + 1;
    console.log('---', score);
  }
  return dispatch({
    type: Types.COUNT_SCORE,
    payload: score,
  });
};
