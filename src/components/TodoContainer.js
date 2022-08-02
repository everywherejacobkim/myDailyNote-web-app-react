import React from "react";
import styled from "styled-components";

const TodoContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 512px;
  height: fit-content;
  position: relative;
  background-color: #fefae0;
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 50px;
`;

const TodoContainer = ({ children }) => {
  return <TodoContainerStyle>{children}</TodoContainerStyle>;
};

export default TodoContainer;
