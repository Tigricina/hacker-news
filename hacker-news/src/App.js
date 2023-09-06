import { NewsItem } from "./NewsItem/NewsItem"

const news = [
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

function App() {
  return (
    <>
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
