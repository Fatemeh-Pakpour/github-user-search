import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container } from "react-bootstrap";

const About = () => {
  return (
    <Container>
      <Card className="user-card text-center profile">
        <Card.Text>Github user search app</Card.Text>
        <Card.Img
          variant="top"
          className="image"
          src="../../public/fateme-samll.jpg"
          alt=""
        />
      </Card>
    </Container>
  );
};
export default About;
