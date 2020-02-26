import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import axios from "axios";
import Timeout from 'await-timeout';

export default function ArticleList() {
  const [articles, set_articles] = useState();
  async function doSomeDataFetching() {
    // console.log("I'm gonna fetch data");
    await Timeout.set(2000)
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
    // console.log(res.data)
    set_articles(res.data)
  }
  useEffect(doSomeDataFetching, []);


  if(articles){
  return (
    <div>
      <p>Here's a lovely list of articles, for your reading pleasure:</p>
        {articles.map(article => (
          <ArticleCard key={article.id} title={article.title} content={article.body} />
          )
        )
      }
    </div>
  )
  } else {
    return <p>Loading...</p>
  }
}