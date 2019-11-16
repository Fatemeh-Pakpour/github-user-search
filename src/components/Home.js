import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import SearchForm from "./SearchForm";
import GithubList from "./GithubList";
import Loading from "./Loading";
import Header from "./Header";

const Home = () => {
  return (
    <div>
    <Header />
    <Container>
      <SearchForm />
      <Loading>
        <GithubList />
      </Loading>
    </Container>
    </div>
  );
};

export default Home;
