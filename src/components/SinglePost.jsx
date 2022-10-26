import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getPostById } from "../actions/posts";
import { useSelector, useDispatch } from "react-redux";
import { Button, Card, Col, Container } from "react-bootstrap";

const SinglePost = () => {
  const params = useParams();
  const post = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const getSinglePost = async () => {
    try {
      const response = await getPostById(params.id);
      if (response.data) {
        window.localStorage.setItem("post", JSON.stringify(response.data));
        dispatch({
          type: "SELECT_POST",
          payload: {
            post: response.data,
          },
        });
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getSinglePost();
  }, []);

  return (
    <div>
      {post && (
        <>
          <Container className="mt-4">
            <Col className="mb-4" key={post.id}>
              <Card style={{ width: "40rem", height: "10rem" }}>
                <Card.Body>
                  <Card.Title>{`${post[0].title
                    .charAt(0)
                    .toUpperCase()}${post[0].title.slice(1)}`}</Card.Title>
                  <Card.Text className="mb-2 ">{post[0].body}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Link to="/posts">
              <Button variant="outline-dark" className="m-2">
                Go back
              </Button>
            </Link>
            <Link to={`/posts/${post[0].id}/comments`}>
              <Button variant="outline-dark">Comments</Button>
            </Link>
          </Container>
        </>
      )}
    </div>
  );
};

export default SinglePost;
