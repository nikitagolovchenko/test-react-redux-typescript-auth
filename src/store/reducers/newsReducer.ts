import { NewsAction, NewsActionTypes, NewsState } from '../../types/NewsTypes';

const initialState = {
  loading: false,
  error: '',
  news: [],
};

export const newsReducer = (
  state: NewsState = initialState,
  action: NewsAction
): NewsState => {
  switch (action.type) {
    case NewsActionTypes.NEWS_REQUEST:
      return { ...state, loading: true, error: '' };

    case NewsActionTypes.NEWS_ERROR:
      return { ...state, loading: false, error: action.payload };

    case NewsActionTypes.NEWS_SUCCESS:
      return { ...state, loading: false, error: '', news: action.payload };

    default:
      return state;
  }
};
