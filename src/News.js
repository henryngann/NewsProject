import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Container, Row } from "react-bootstrap";
/*

      <p>Desc: {props.description}</p>
      <p>Author : {props.author}</p>
      <img
        src={props.urlToImage}
        alt="News Image"
        width="150px"
        height="150px"
      />*/
const News = (props) => {
  return (
    <Card border="warning" style={{ width: "18rem", height: "420px" }}>
      <Card.Img src={props.urlToImage} style={{ height: "144px" }} />
      <Card.Body>
        <a href={props.url}>
          <Card.Title>{props.title}</Card.Title>
        </a>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default News;
