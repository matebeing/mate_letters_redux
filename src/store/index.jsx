import { combineReducers, createStore } from 'redux';
import { letterReducer } from './reducers/letter';

const rootReducer = combineReducers({
    letter: letterReducer
})

export const store = createStore(rootReducer)