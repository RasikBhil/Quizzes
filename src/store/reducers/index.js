import * as Types from '../types';

const intialState = {
  questions: [],
};

const reducer = (state = intialState, action) => {
  console.log('------->>', action);
  switch (action.type) {
    case Types.GET_QUESTIONS:
      return {...state, questions: action.payload};
    default:
      return {...state};
  }
};

export default reducer;
