import {
  combineReducers
} from 'redux';
import {
  columnsReducer
} from './columnsReducer';

export const Reducers = combineReducers({
  columnsManager: columnsReducer
});