import { useState, useContext } from "react";
import { ArticleProps } from "../../helpers/interfaces";
import styles from './Article.module.css'
const Article: React.FC<ArticleProps> = ({ art }) => {
    return(
        <>
       <a href={art.url} target="__blank"  >
          <img src={art.urlToImage} alt={art.title} style={{ width: "100%" }} /></a>
          
          </>
    )
}
export default Article;