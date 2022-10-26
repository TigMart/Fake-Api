import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";

const MyModal = ({
  btnName,
  btnTitle,
  icon = "",
  modalHeading = "",
  modalText,
  variant,
  id,
}) => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch({
      type: "TO_DELETE",
      payload: {
        posts: posts.filter((item) => item.id !== id),
      },
    });
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteHandler = () => {
    onDelete(id);
    handleClose();
  };

  return (
    <>
      <Button variant={variant} onClick={handleShow}>
        {icon} {btnTitle}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalHeading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalText}</Modal.Body>
        <Modal.Footer>
          <Button size="sm" variant="secondary" onClick={handleClose}>
            {btnName === "Delete" ? "No" : "ok"}
          </Button>
          {btnName === "Delete" && (
            <Button size="sm" variant="outline-danger" onClick={deleteHandler}>
              {btnName}
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyModal;
