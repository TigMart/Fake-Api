import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useSelector, useDispatch } from "react-redux";
import { PutPost } from "../actions/addPost";

const EditPost = ({ type, id, placeholder }) => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  
  const { PhTitle, PhBody } = placeholder;

  const [value1, setValue1] = useState({
    editTitle: PhTitle,
  });
  const [value2, setValue2] = useState({
    editBody: PhBody,
  });

  const onChange1 = (e) => {
    setValue1((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onChange2 = (e) => {
    setValue2((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onEditSubmit = async (e, id) => {
    e.preventDefault();
    try {
      let edited = posts.map((elem) => {
        return elem.id === id
          ? {
              id: id,
              title: value1.editTitle,
              body: value2.editBody,
            }
          : {
              ...elem,
            };
      });

      const res = await PutPost(edited, id);
      if (res.data) {
        dispatch({
          type: "ON_EDIT",
          payload: { content: res.data.body },
        });
      }
    } catch (err) {
      console.log(err);
    }

  };


  return (
    <Form autoComplete="off" className="mt-3" onSubmit={(e) => onEditSubmit(e, id)}>
      <Row>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text>Title</InputGroup.Text>
          <Form.Control
            value={value1.editTitle || ""}
            onChange={onChange1}
            type={type}
            name="editTitle"
            placeholder={PhTitle}
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text>Body</InputGroup.Text>
          <Form.Control
            value={value2.editBody || ""}
            onChange={onChange2}
            type={type}
            name="editBody"
            placeholder={PhBody}
          />
        </InputGroup>
        <div className="d-grid gap-2">
          <Button className="rounded-4" type="submit" variant="dark" size="sm">
            Save
          </Button>
        </div>
      </Row>
    </Form>
  );
};

export default EditPost;
