import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
const Erroe404 = () => {
  return (
    <Container>
      <div>Error 404</div>
      <Link to="/">Go to Home</Link>
    </Container>
  );
};

export default Erroe404;
