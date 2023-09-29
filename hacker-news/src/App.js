import { NewsItem } from "./NewsItem/NewsItem";
import { useEffect, useState } from "react";

const initNews = [
  {
    title: 'Первая новость',
    url: 'www.example.com',
    username: 'Пользователь',
    date: '11.11.11',
    score: 100,
    id: '1'
  },
  {
    title: 'Вторая новость',
    url: 'www.example.com',
    username: 'Пользователь 2',
    date: '05.10.11',
    score: 1000,
    id: '2'
  },
  {
    title: 'Третья новость',
    url: 'www.example.com',
    username: 'Пользователь 3',
    date: '11.09.11',
    score: 200,
    id: '3'
  }
]

const newNews = {
  title: 'Четвёртая новость',
  url: 'www.example.com',
  username: 'Пользователь 3',
  date: '17.09.11',
  score: 500,
  id: '4'
}

function App() {
  const checkStorage = () => JSON.parse(window.localStorage.getItem('newsKey')) || initNews
  const [news, setNews] = useState(checkStorage)

  useEffect(() => {
    window.localStorage.setItem('newsKey', JSON.stringify(news))
  }, [news])

  const newCountHandler = () => {
    setNews((prevState) => [...prevState, newNews]) 
  }

  return (
    <>
      <div>Количество новостей: {news.length}</div>
      <button onClick={newCountHandler}>Добавить новость</button>
      {
        news.map(item => {
          return (
            <NewsItem 
              title={item.title} 
              url={item.url} 
              username={item.username} 
              date={item.date}
              score={item.score}
              key={item.id}
            />
          )
        })
      }
    </>
  );
}

export default App;
