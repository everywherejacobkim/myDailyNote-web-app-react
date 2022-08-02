import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDeleteOutline } from "react-icons/md";
import { useTodoDispatch } from "../context/TodoContext";

const CheckCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #2c302e;
  font-size: 24px;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 2px solid #38b000;
      color: #38b000;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 20px;
  color: #2c302e;
  text-align: left;
  margin-left: 10px;
  ${(props) =>
    props.done &&
    css`
      color: #b9bea5;
      text-decoration: line-through;
    `}
  &:hover {
    transform: translateX(5px);
    transition: transform 250ms;
    cursor: default;
  }
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  color: #343a40;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  ${(props) =>
    props.done &&
    css`
      color: #b9bea5;
    `}
`;

const TodoItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  max-width: 360px;
  width: 100%;
`;

const ParentContainer = styled.div`
  display: flex;
`;

const TodoItem = ({ id, done, text }) => {
  const dispatch = useTodoDispatch();
  const onToggle = () =>
    dispatch({
      type: "TOGGLE",
      id,
    });
  const onRemove = () =>
    dispatch({
      type: "REMOVE",
      id,
    });

  return (
    <ParentContainer>
      <TodoItemContainer>
        <div style={{ display: "flex", marginLeft: 25 }} onClick={onToggle}>
          <CheckCircle done={done}>{<MdDone />}</CheckCircle>
          <Text done={done}>{text}</Text>
        </div>
      </TodoItemContainer>

      <Remove done={done} onClick={onRemove}>
        <MdDeleteOutline />
      </Remove>
    </ParentContainer>
  );
};

export default TodoItem;
