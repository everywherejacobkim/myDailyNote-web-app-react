import React from "react";
import styled from "styled-components";
import { useTodoState } from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoListStyle = styled.div`
  flex: 1;
  padding: 20px 30px;
  padding-bottom: 160px;
  background-color: #faedcd;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;

const TodoList = () => {
  const todos = useTodoState();
  return (
    <TodoListStyle>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </TodoListStyle>
  );
};

export default TodoList;
