
const initialState = {
    answerIsHidden: true
};

const definitionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_SUCCESS':
            return {
                ...state,
                data: action.payload
            };
        case 'IS_ANSWER_HIDDEN':
            return {
                ...state,
                answerIsHidden: action.payload
            }
        case 'CLEAR_STATE':
            return action.payload;
        default: 
            return state;
    }
};

export default definitionsReducer;