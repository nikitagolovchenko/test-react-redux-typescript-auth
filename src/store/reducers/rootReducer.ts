import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { newsReducer } from './newsReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  news: newsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
