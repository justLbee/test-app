import { combineReducers } from "redux";

// import formControls from "./formControls";
import inputReducer from "./input-reducer"

const allReducers = combineReducers({
    // formControls,
    inputReducer
});

export default allReducers;
