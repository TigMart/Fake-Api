import Card from "react-bootstrap/Card";
import React from "react";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useState } from "react";
import { Col } from "react-bootstrap";
import { getPostsByPage } from "../actions/getPostsByPage";

const PostCards = () => {
  const [posts, setPosts] = useState([]);

  const _getPostsByPage = async () => {
    try {
      const res = await getPostsByPage();
      if (res.data) {
        setPosts(res.data);
      }
    } catch (err) {
      toast.error(err.response.data);
    }
  };
  useEffect(() => {
    _getPostsByPage();
  }, []);
  return posts && posts.length ? (
    posts.map((post) => {
      return (
        <Col className="mb-4" key={post.id}>
          <Card style={{ width: "18rem", height: "18rem" }}>
            <Card.Body>
              <Card.Title>
                {`${post.title.charAt(0).toUpperCase()}${post.title.slice(1)}`}
              </Card.Title>
              <Card.Text className="mb-2 ">{post.body}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      );
    })
  ) : (
    <></>
  );
};

export default PostCards;
