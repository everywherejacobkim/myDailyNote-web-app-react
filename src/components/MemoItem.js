import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";

const AccordionStyle = styled.div`
  padding: 2% 3.5%;
  border-radius: 50px;
  .accordion-button:not(.collapsed) {
    background-color: #6d985c;
    color: white;
    font-weight: bold;
  }
  .accordion-button {
    background-color: #fefae9;
  }
  .accordion-button:focus {
    border-color: #285943;
    box-shadow: 0 0 0 0.25rem rgba(109, 152, 92, 0.25);
  }
  .accordion-button::after {
    color: black;
  }
  .accordion-body {
    background-color: #fffff1;
    text-align: left;
  }
`;

const MemoItem = ({ memo, setMemo }) => {
  const [addedMemo, setAddedMemo] = useState([]);

  useEffect(
    function loadMemo() {
      axios
        .get("http://localhost:8080/memo")
        .then((result) => {
          setAddedMemo(result.data);
        })
        .catch((err) => console.log(err));
    },
    [memo]
  );
  return (
    <>
      <AccordionStyle>
        <Accordion defaultActiveKey="0">
          {addedMemo.map((memo, index) => {
            return (
              <Accordion.Item eventKey={index} key={index}>
                <Accordion.Header>{memo.title}</Accordion.Header>
                <Accordion.Body>{memo.memo}</Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </AccordionStyle>
    </>
  );
};

export default MemoItem;
