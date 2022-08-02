import React, { useState } from "react";
import styled from "styled-components";
import MemoModal from "./MemoModal";

const MemoHeadStyle = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  padding-top: 24px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 35px;
  border-bottom: 1px solid #ccd5ae;

  h1 {
    margin: 0;
    font-size: 32px;
    line-height: 20px;
    color: #73a942;
    text-shadow: 0 13.36px 8.896px #c4b59d, 0 -2px 1px #fff;
    letter-spacing: -2px;
    margin-bottom: 16px;
    transform: translateY(-3px);
  }
  h6 {
    position: absolute;
    top: 60%;
    font-weight: bold;
    margin-left: 2px;
  }
  button {
    border-radius: 10px;
    background-color: #6d985c;
    color: #fff;
    font-weight: bold;
  }
  button:hover {
    background-color: #2c6e49;
  }
`;

const MemoHead = ({ memo, setMemo }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <MemoHeadStyle>
        <h1>Memo</h1>
        <h6>A weak note is better than a strong memory</h6>
        <button onClick={handleShow}>Add New</button>
      </MemoHeadStyle>
      <MemoModal
        memo={memo}
        setMemo={setMemo}
        show={show}
        handleClose={handleClose}
      />
    </>
  );
};

export default MemoHead;
