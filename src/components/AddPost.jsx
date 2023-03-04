import React from "react";
import { Button, Col } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { addPost } from "../actions/addPost";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

const AddPost = () => {
  const [id, setId] = useState(101);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const postData = {
    title: title,
    body: body,
    id: id,
  };

  const dispatch = useDispatch();
  const addPostHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await addPost(postData);
      dispatch({
        type: "SET_POST",
        payload: {
          post: res.data.body,
        },
      });
      setId(id + 1);
      setTitle("");
      setBody("");
      toast.success("successfully added");
    } catch (err) {
      toast.error(err.response);
    }
  };
  return (
    <Col md={{ span: 4, offset: 4 }} className="mb-4">
      <h3>Add Post</h3>
      <Form onSubmit={addPostHandler}>
        <InputGroup className="mt-2 mb-2">
          <InputGroup.Text id="basic-addon1" className="bg-dark text-white">
            Title
          </InputGroup.Text>
          <Form.Control
            aria-label="Title"
            aria-describedby="basic-addon1"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </InputGroup>
        <InputGroup className="mt-2 mb-2">
          <InputGroup.Text id="basic-addon2" className="bg-dark text-white">
            Body
          </InputGroup.Text>
          <Form.Control
            aria-label="Body"
            aria-describedby="basic-addon2"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </InputGroup>
        <Button variant="dark" type="submit" className="w-100">
          Add
        </Button>
      </Form>
    </Col>
  );
};

export default AddPost;
