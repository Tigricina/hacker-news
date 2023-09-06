import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {NewsItem} from "./NewsItem/NewsItem";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <NewsItem 
      title='Первая новость' 
      url='www.example.com' 
      username='Пользователь' 
      date='10.10.11' 
      score={10}
    />
    <NewsItem 
      title='Вторая новость' 
      url='www.example.com' 
      username='Пользователь 2' 
      date='10.20.11' 
      score={100}
    />
    <NewsItem 
      title='Третья новость' 
      url='www.example.com' 
      username='Пользователь 3' 
      date='10.10.11' 
      score={20}
    />
  </>
  



  
);




