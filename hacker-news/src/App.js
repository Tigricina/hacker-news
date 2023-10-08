import { NewsItem } from "./NewsItem/NewsItem";
import { useEffect, useState } from "react";
import { get } from "./api/api";



function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNewList();
  }, []);

  async function getNewList() {
    const newsIds = await get(
      "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
    );
    const newList = await Promise.all(
      newsIds.map((id) =>
        get(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
        )
      )
    );

    setNews(newList)
  }

  return (
    <>
      <div>Количество новостей: {news.length}</div>
      {news.map((item) => {
        return (
          <NewsItem
            title={item.title}
            url={item.url}
            username={item.username}
            date={item.date}
            score={item.score}
            key={item.id}
          />
        );
      })}
    </>
  );
}

export default App;
