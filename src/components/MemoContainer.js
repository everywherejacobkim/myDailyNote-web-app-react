import React from "react";
import styled from "styled-components";

const MemoContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
  padding-bottom: 10px;
  height: fit-content;
  position: relative;
  background-color: #fefae0;
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
`;

const MemoContainer = ({ children }) => {
  return <MemoContainerStyle>{children}</MemoContainerStyle>;
};

export default MemoContainer;
