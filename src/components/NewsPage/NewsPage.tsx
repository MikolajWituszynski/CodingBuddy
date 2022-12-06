import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { API_KEY } from "../../helpers/helpers";
import styles from './NewsPage.module.css'
import { ArticleObj } from "../../helpers/interfaces";
import Article from "../Article/Article";
const NewsPage = () => {
    const [todaysArticles, setArticles] = useState([]);

    useEffect(() => {
    axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=911d7d796fc34cab93323b091fa636fa`)
    .then((response) => {
        console.log(response.data.articles);
        setArticles(response.data.articles);
        
      })
      .catch((err) => {
        console.error(err.message);
      });
    

    },[])
    
    return ( 
        <>
        <div className={styles.articles}>All Tech Articles</div>
        {todaysArticles.map((article: ArticleObj) => {
          return (<Article art={article} key={article.title}/>)
        })}
        </>
    )
};
export default NewsPage;