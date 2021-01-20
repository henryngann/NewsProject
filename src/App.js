import React, { useState, useEffect } from "react";
import axios from "axios";
import News from "./News.js";
import { Button, Card, Col, Row, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  //Everytime our application renders, this function is called.
  //Everytime some changes happen to the second param, the function is called

  const apiKey = "5804bd1a0edf42f8bd434edb8c26b7a4";
  const [news, setNews] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

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
    <Container>
      <Row className="justify-content-md-center mb-5 mt-5">
        <Col md={12}>
          <h1
            style={{
              marginTop: "30px",
              marginBottom: "30px",
            }}
          >
            News Project
          </h1>
          <h6>Top Business Headlines in the US</h6>
        </Col>
      </Row>
      <Row className="justify-content-md-center mb-5 mt-5">
        <Col md={0}>
          <input
            type="text"
            style={{ width: "300px", alignSelf: "center" }}
            placeholder="Search..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          ></input>
        </Col>
      </Row>
      <Row className="justify-content-md-center mb-5 mt-5">
        {news
          .filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((news, key) => (
            <Col
              md={4}
              style={{
                width: "300px",
                height: "420px",
                marginTop: "30px",
                overflow: "hidden",
              }}
            >
              <News
                className=""
                title={news.title}
                description={news.description}
                author={news.author}
                urlToImage={news.urlToImage}
                url={news.url}
              />
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default App;
