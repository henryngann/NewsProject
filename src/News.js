import React from "react";

const News = (props) => {
  return (
    <div className="news-container">
      <div className="news-row">
        <h1>{props.title}</h1>
        <p>Desc: {props.description}</p>
        <p>Author : {props.author}</p>
        <img
          src={props.urlToImage}
          alt="News Image"
          width="150px"
          height="150px"
        />
      </div>
    </div>
  );
};

export default News;
