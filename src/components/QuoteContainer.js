import React from "react";
import styled from "styled-components";

const QuoteContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
  height: fit-content;
  position: relative;
  background-color: #fefae0;
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  margin-left: 20px;
  padding: 20px;
`;

const QuoteContainer = ({ children }) => {
  return <QuoteContainerStyle>{children}</QuoteContainerStyle>;
};

export default QuoteContainer;
