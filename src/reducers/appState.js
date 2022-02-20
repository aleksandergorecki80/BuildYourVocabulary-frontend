const initialState = {
    answerIsHidden: true,
    answerGiven: false,
    answerCorrect: false
};

const appStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'IS_ANSWER_HIDDEN':
      return {
        ...state,
        answerIsHidden: action.payload,
      };
    case 'IS_ANSWER_GIVEN':
      return {
        ...state,
        answerGiven: action.payload
      }
    case 'SET_ANSWER_CORRECT':
      return {
        ...state,
        answerCorrect: true
      }
    case 'RESET_STATE':
      return initialState;
    default:
      return state;
  }
};

export default appStateReducer;