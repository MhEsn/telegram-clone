import { combineReducers } from 'redux';
import AppReducer from './AppReducer';
import UserReducer from './UserReducer';
import ChatReducer from './ChatReducer';

const reducers = combineReducers({
  app: AppReducer,
  user: UserReducer,
  chat: ChatReducer,
});

export default reducers;
