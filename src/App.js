import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import News from "./News.js";

function App() {
  //Everytime our application renders, this function is called.
  //Everytime some changes happen to the second param, the function is called

  const apiKey = "5804bd1a0edf42f8bd434edb8c26b7a4";
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`
      )
      .then((res) => {
        setNews(res.data.articles);
        console.log(res.data.articles);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="news-app">
      {news.map((news) => (
        <News
          title={news.title}
          description={news.description}
          author={news.author}
          urlToImage={news.urlToImage}
        />
      ))}
    </div>
  );
}

export default App;
