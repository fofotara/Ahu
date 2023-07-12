import {combineReducers} from 'redux';
import Reducer from './reducer';
import OperationReducer from './OperationReducer';

export default combineReducers({
  OperationStore: Reducer,
  Operations: OperationReducer,
});
