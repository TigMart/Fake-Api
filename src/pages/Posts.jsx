import React from "react";
import { Container, ListGroup, Row } from "react-bootstrap";
import AddPost from "../components/AddPost";
import PostsTable from "../components/PostsTable";

const Posts = () => {
  return (
    <Container className="mt-4 mb-4">
      <Row>
        <h2>All Posts</h2>
        <AddPost />
        <ListGroup className="post-parent mb-4">
          <PostsTable />
        </ListGroup>
      </Row>
    </Container>
  );
};

export default Posts;
