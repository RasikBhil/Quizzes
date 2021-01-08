import * as Types from '../types';
import axios from 'axios';

export const getQuestions = ({amount, category, difficulty, type}) => (
  dispatch,
) => {
  const getPromise = async () => {
    const {data} = await axios.get(
      `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`,
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
  }
  return dispatch({
    type: Types.COUNT_SCORE,
    payload: score,
  });
};

export const clearState = () => (dispatch) => {
  return dispatch({
    type: Types.CLEAR_STATE,
  });
};

export const prevSelected = ({amount, category, difficulty, type}) => (
  dispatch,
) => {
  return dispatch({
    type: Types.SAVE_TYPES,
    payload: {
      amount,
      category,
      difficulty,
      type,
    },
  });
};
