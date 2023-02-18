import React, { useState, useEffect } from "react";
import axios from "axios";

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://newsapi.org/v2/top-headlines", {
        params: {
          country: "us",
          apikey: "68628ec329644a39a9297d204c4d8ac5",
        },
      })
      .then((response) => {
        setArticles(response.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="row">
      {articles.map((article) => (
        <div className="col-10 col-lg-4 col-md-5 col-sm-10 mx-auto">
          <div class="card m-1" key={article.url}>
            <img
              src={article.urlToImage}
              alt={article.title}
              class="card-img-top"
            />
            <div class="card-body">
              <h5 class="card-title">{article.title}</h5>
              <p class="card-text">{article.description}</p>
              <a href={article.url} class="btn btn-primary">
                Read more
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
