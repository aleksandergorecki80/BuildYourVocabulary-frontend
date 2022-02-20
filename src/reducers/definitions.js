
const initialState = {};

const definitionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_SUCCESS':
            return action.payload;
        // case 'IS_ANSWER_HIDDEN':
        //     return {
        //         ...state,
        //         answerIsHidden: action.payload
        //     }
        case 'RESET_STATE':
            return initialState;
        default: 
            return state;
    }
};

export default definitionsReducer;