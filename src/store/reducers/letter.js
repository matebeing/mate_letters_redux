import { createActions, createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";

const INITIAL_STATE = Immutable({
    value: []
})

const {Types, Creators} = createActions({
    create: ["payload"]
})

const letterReducer = createReducer(INITIAL_STATE, {
    [Types.CREATE]: (state, {payload}) => {
        return state.merge({
            value: [...state.value, payload]
        })
    }
})

export { letterReducer, Creators };