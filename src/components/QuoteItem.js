import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { BsFillChatRightQuoteFill } from "react-icons/bs";

const QuoteStyle = styled.div`
  padding: 5%;
  letter-spacing: 1px;
  h4 {
    line-height: 1.7;
  }
  .quoteIcon {
    margin-right: 10px;
    margin-bottom: 20px;
    color: #6d985c;
    transform: translateY(-10px);
  }
`;

const QuoteItem = ({ chosenQuote }) => {
  const [quote, setQuote] = useState([]);
  useEffect(
    function loadQuote() {
      axios
        .get(`https://quotable.io/quotes?tags=${chosenQuote}`)
        .then((result) => {
          setQuote(
            result.data.results[`${Math.floor(Math.random() * 10)}`].content
          );
        })
        .catch((err) => console.log(err));
    },
    [chosenQuote]
  );
  return (
    <QuoteStyle>
      <h4>
        <BsFillChatRightQuoteFill className="quoteIcon" />
        {quote}{" "}
      </h4>
    </QuoteStyle>
  );
};

export default QuoteItem;
