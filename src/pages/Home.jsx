import React from "react";
import { Badge, Container, Row } from "react-bootstrap";
import PostCards from "../components/PostCards";

const Home = () => {
  return (
    <>
      <Container xs={6} md={3} className="mt-4">
        <Badge bg="warning" className="mb-4">
          TOP
        </Badge>
        <Row>
          <PostCards />
        </Row>
      </Container>
    </>
  );
};

export default Home;
