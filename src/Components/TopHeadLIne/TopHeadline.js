import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
    const [articles , setArticles]=useState([]);
    useEffect(() => {
        fetch("https://newsapi.org/v2/everything?q=tesla&from=2021-08-12&sortBy=publishedAt&apiKey=061db73a650d4c92a03a8db9c32816b9")
        .then(req=>req.json())
        .then(data=>setArticles(data.articles))
    }, [])
    console.log(articles);
    return (
        <div className="p-4">
            <h2>Top headlines : {articles.length}</h2>
            {
                articles.map(x=> <News news={x}/>)
            }
        </div>
    );
};

export default TopHeadline;