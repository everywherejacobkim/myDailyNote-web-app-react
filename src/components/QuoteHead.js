import React, { useState } from "react";
import styled from "styled-components";
import QuoteDropdown from "./QuoteDropdown";

const QuoteHeadStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 24px;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 25px;
  border-bottom: 1px solid #ccd5ae;

  h1 {
    margin: 0;
    font-size: 32px;
    line-height: 20px;
    color: #73a942;
    text-shadow: 0 13.36px 8.896px #c4b59d, 0 -2px 1px #fff;
    letter-spacing: -2px;
    margin-bottom: 16px;
  }
  button {
    border-radius: 10px;
    background-color: #6d985c;
    color: #fff;
    font-weight: bold;
  }
`;

const QuoteHead = ({ chosenQuote, setChosenQuote }) => {
  return (
    <>
      <QuoteHeadStyle>
        <h1>Quote of the day</h1>
        <QuoteDropdown
          chosenQuote={chosenQuote}
          setChosenQuote={setChosenQuote}
        />
      </QuoteHeadStyle>
    </>
  );
};

export default QuoteHead;
