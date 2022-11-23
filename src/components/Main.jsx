import React, { useEffect, useState } from "react";
import axios from "axios";
import ArticleHeadline from "./ArticleHeadline";
import "../assets/css/Main.css";

const Main = (props) => {
  // news storing state
  const [news, setNews] = useState();
  const [searchState, setSearchState] = useState(true);

  useEffect(() => {
    const getNews = async () => {
      const resp = await axios.get(
        `https://newsapi.org/v2/top-headlines?pageSize=20&country=${props.selectedCountry}&category=${props.category}&apiKey=${process.env.REACT_APP_NEWS_KEY1}`
      );
      setNews(resp.data.articles);
    };
    getNews();
    console.log(props.category);
  }, [props.selectedCountry, props.category]);

  useEffect(() => {
    if (props.searchInput.length > 2) {
      const getNews = async () => {
        const resp = await axios.get(
          `https://newsapi.org/v2/everything?pageSize=20&q=${props.searchInput}&apiKey=${process.env.REACT_APP_NEWS_KEY1}`
        );
        console.log(resp.data.totalResults)
        if (resp.data.totalResults > 0) {
          setNews(resp.data.articles);
        } else {
          setSearchState(!searchState);
        }
      };
      getNews();
      console.log("search request!");
    }
  }, [props.searchInput]);

  if (searchState) {
    return (
      <div className="main">
        {news?.map((e, i) => (
          <ArticleHeadline
            title={e.title}
            img={e.urlToImage}
            description={e.description}
            publishedAt={e.publishedAt}
            url={e.url}
            key={i.toString()}
          />
        ))}
      </div>
    );
  } else {
    return (
    <div className="main-no-results">
      <h2 className="no-results-title">Your search didn't return anything :( </h2>
    </div>
    );
  };
};

export default Main;
