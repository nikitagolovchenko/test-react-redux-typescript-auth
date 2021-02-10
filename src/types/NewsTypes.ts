export interface News {
  id?: number;
  title: string;
  body: string;
}

export interface NewsState {
  loading: boolean;
  error: string;
  news: Array<News>;
}

export enum NewsActionTypes {
  NEWS_REQUEST = 'NEWS_REQUEST',
  NEWS_ERROR = 'NEWS_ERROR',
  NEWS_SUCCESS = 'NEWS_SUCCESS',
}

interface NewsRequest {
  type: NewsActionTypes.NEWS_REQUEST;
}

interface NewsError {
  type: NewsActionTypes.NEWS_ERROR;
  payload: string;
}

interface NewsSuccess {
  type: NewsActionTypes.NEWS_SUCCESS;
  payload: News[];
}

export type NewsAction = NewsRequest | NewsError | NewsSuccess;
