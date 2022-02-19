
import tmpState from '../_tmp_definitions'

const initialState = tmpState;

const definitionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_SUCCESS':
            return [
                ...state,
                action.payload
            ];
        default: 
            return state;
    }
};

export default definitionsReducer;