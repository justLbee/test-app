import { combineReducers } from "redux";

import inputReducer  from "./input-reducer"
import submitReducer from "./submit-reducer"

const allReducers = combineReducers({
    inputReducer,
    submitReducer
});

export default allReducers;
