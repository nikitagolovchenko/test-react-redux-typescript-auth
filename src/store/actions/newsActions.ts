import { Dispatch } from 'react';
import { News, NewsAction, NewsActionTypes } from '../../types/NewsTypes';

const url: string = 'https://jsonplaceholder.typicode.com/posts';
const limit: number = 3;

export const newsRequest = (page: number) => {
  return async (dispatch: Dispatch<NewsAction>) => {
    try {
      dispatch({
        type: NewsActionTypes.NEWS_REQUEST,
      });

      const request: Response = await fetch(
        `${url}/?_page=${page}&_limit=${limit}`
      );
      const data: News[] = await request.json();

      dispatch({
        type: NewsActionTypes.NEWS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: NewsActionTypes.NEWS_ERROR,
        payload: error.message,
      });
    }
  };
};
