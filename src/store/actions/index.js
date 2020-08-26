import * as Types from '../types';
import axios from 'axios';

export const getQuestions = () => (dispatch) => {
  const getPromise = async () => {
    const {data} = await axios.get(
      'https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple',
    );
    return data;
  };
  return dispatch({
    type: Types.GET_QUESTIONS,
    payload: getPromise(),
  });
};
