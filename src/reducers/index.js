import { combineReducers } from "redux";
import definitionsReducer from 'reducers/definitions';
import appStateReducer from 'reducers/appState';

const rootReducer = combineReducers({
    definition: definitionsReducer,
    appState: appStateReducer
})

export default rootReducer;