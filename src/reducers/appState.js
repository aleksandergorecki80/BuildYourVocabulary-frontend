const initialState = {
    answerIsHidden: true
};

const appStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'IS_ANSWER_HIDDEN':
      return {
        ...state,
        answerIsHidden: action.payload,
      };
    case 'RESET_STATE':
      return initialState;
    default:
      return state;
  }
};

export default appStateReducer;