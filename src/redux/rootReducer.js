///////// Manipultion of Data //////////

//Step 2 Redux

import taskReducer from "./Task.js/task-reducers"

import { combineReducers } from "redux";


const rootReducer = combineReducers({
    taskShop : taskReducer
});


export default rootReducer;
