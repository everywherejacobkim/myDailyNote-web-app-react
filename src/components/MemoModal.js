import React from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

const BtnAddStyle = styled.div`
  text-align: right;
  position: relative;
  .addBtn {
    width: fit-content;
    height: fit-content;
    padding: 5px 10px;
    margin-right: 5px;
    border-radius: 10px;
    background-color: #6d985c;
    color: #fff;
    font-weight: bold;
  }
`;

const BtnCloseStyle = styled.div`
  .closeBtn {
    position: absolute;
    bottom: 5.5%;
    right: 25.5%;
    width: 15%;
    height: fit-content;
    margin-right: 7px;
    padding: 5px 10px;
    border-radius: 10px;
    font-weight: bold;
  }
`;

const MemoModal = (modal) => {
  const { show, handleClose, setMemo } = modal;

  const submitMemo = (e) => {
    e.preventDefault();
    let data = {
      title: e.target.querySelector("[name='title']").value,
      memo: e.target.querySelector("[name='memo']").value,
    };
    axios
      .post("http://localhost:8080/memo", data)
      .then((result) => {
        setMemo(result.data);
      })
      .catch((error) => console.log(error.response.data));
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Memo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={submitMemo}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" name="title" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Memo</Form.Label>
            <Form.Control as="textarea" name="memo" rows={3} />
          </Form.Group>
          <BtnAddStyle>
            <button onClick={handleClose} type="submit" className="addBtn">
              Add Memo
            </button>
          </BtnAddStyle>
        </Form>
        <BtnCloseStyle>
          <button onClick={handleClose} className="closeBtn">
            Close
          </button>
        </BtnCloseStyle>
      </Modal.Body>
    </Modal>
  );
};

export default MemoModal;
