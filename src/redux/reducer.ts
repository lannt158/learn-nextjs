import { combineReducers } from "@reduxjs/toolkit";
import {counterReducer} from "@/modules/counter"

const reducers = combineReducers({
    counter: counterReducer
})

export default reducers;
