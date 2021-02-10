import React from 'react';
import { News } from '../types/NewsTypes';

const NewsCard: React.FC<News> = ({ title, body }) => {
  return (
    <div className='news-card'>
      <h3>{title.toUpperCase()}</h3>
      <p>{body}</p>
    </div>
  );
};

export default NewsCard;
