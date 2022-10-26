import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { getPosts } from "../actions/posts";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import MyModal from "./MyModal";
import EditPost from "./EditPost";

const PostsTable = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const _getPost = async () => {
    try {
      const response = await getPosts();
      if (response.data) {
        window.localStorage.setItem("posts", JSON.stringify(response.data));
        dispatch({
          type: "GET_ALL_POSTS",
          payload: {
            posts: response.data,
          },
        });
      }
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  useEffect(() => {
    _getPost();
  }, []);
  return (
    <>
      {posts && posts.length ? (
        <Accordion>
          {posts.map((post, i) => (
            <Accordion.Item eventKey={post.id} key={i}>
              <Accordion.Header>
                {post.title &&
                  `${post.title.charAt(0).toUpperCase()}${post.title.slice(1)}`}
              </Accordion.Header>
              <Link to={`/posts/${post.id}`} key={Math.random() * 1000}>
                <Accordion.Body>{post.body}</Accordion.Body>
              </Link>
              <MyModal
                btnTitle="Edit"
                icon={<i className="bi bi-pen"></i>}
                modalHeading="Are you sure?"
                variant="outline-warning"
                modalText={
                  <EditPost
                    type="text"
                    id={post.id}
                    placeholder={{ PhTitle: post.title, PhBody: post.body }}
                  />
                }
              ></MyModal>
              <MyModal
                id={post.id}
                btnName="Delete"
                btnTitle="Delete"
                icon={<i className="bi bi-trash"></i>}
                modalText="Are you sure to continue ?"
                variant="outline-danger"
                modalHeading={`You are trying to delete "${post.title}" from your list `}
              ></MyModal>
            </Accordion.Item>
          ))}
        </Accordion>
      ) : (
        <div>No Post</div>
      )}
    </>
  );
};

export default PostsTable;

/*  */
