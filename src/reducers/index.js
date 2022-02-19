import { combineReducers } from "redux";
import definitionsReducer from 'reducers/definitions';

const rootReducer = combineReducers({
    definition: definitionsReducer
})

export default rootReducer;