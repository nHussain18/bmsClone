import {combineReducers} from '@reduxjs/toolkit';
import homeReducer from './home/slice';

const rootReducer = combineReducers({
  homeReducer,
});

export default rootReducer;
