import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getPostComments } from "../actions/posts";
import { useSelector, useDispatch } from "react-redux";
import { Card, Col, Container, Row } from "react-bootstrap";

const Comments = () => {
  const params = useParams();
  const comments = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  const getSinglePostComments = async () => {
    try {
      const response = await getPostComments(params.id);
      if (response.data) {
        window.localStorage.setItem("comments", JSON.stringify(response.data));
        dispatch({
          type: "SELECT_POST_COMMENTS",
          payload: {
            comments: response.data,
          },
        });
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getSinglePostComments();
  }, []);
  return comments && comments.length ? (
    <Container className="mt-4 mb-4">
      <h2>Comments</h2>
      <Row>
        {comments.map((comment) => {
          return (
            <Col className="mb-4" key={comment.id}>
              <Card style={{ width: "18rem", height: "18rem" }}>
                <Card.Body>
                  <Card.Title>{comment.name}</Card.Title>
                  <Card.Text className="mb-2">{comment.body}</Card.Text>
                  <strong>Email:</strong> <small> {comment.email}</small>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      <Link to={`/posts/${params.id}`}>Go Back</Link>
    </Container>
  ) : (
    <></>
  );
};

export default Comments;
