import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ErrorAlert from '../components/ErrorAlert';
import NewsCard from '../components/NewsCard';
import Pagination from '../components/Pagination';
import Spinner from '../components/Spinner/Spinner';
import Wrapper from '../components/Wrapper';
import { RootState } from '../store/reducers/rootReducer';
import { newsRequest } from './../store/actions/newsActions';

const NewsPage: React.FC = () => {
  const news = useSelector((state: RootState) => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(newsRequest(1));
  }, []);

  return (
    <Wrapper>
      <h1>News page</h1>

      <div className='news-block'>
        {news.news.map(el => {
          return <NewsCard title={el.title} body={el.body} key={el.id} />;
        })}
      </div>
      {news.news.length ? <Pagination /> : null}
      
      {news.loading && <Spinner />}
      {news.error && <ErrorAlert alert={news.error} />}
    </Wrapper>
  );
};

export default NewsPage;
