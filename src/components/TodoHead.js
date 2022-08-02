import React from "react";
import styled from "styled-components";
import { useTodoState } from "../context/TodoContext";

const TodoHeadStyle = styled.div`
  padding: 0, auto;
  border-bottom: 1px solid #d4a373;

  .todo-header {
    margin-top: 20px;
    margin-bottom: 10px;
    font-weight: bold;
  }
  h1 {
    font-size: 32px;
    line-height: 20px;
    color: #73a942;
    text-shadow: 0 13.36px 8.896px #c4b59d, 0 -2px 1px #fff;
    letter-spacing: -2px;
    margin-bottom: 16px;
  }
`;

const TodoHead = () => {
  const todos = useTodoState();
  const undoneTodos = todos.filter((todo) => !todo.done);

  return (
    <TodoHeadStyle>
      <div className="todo-header">
        <h1>Todo List</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          You have &nbsp;
          <div
            style={{
              color: "#f3de2c",
              fontSize: "20px",
              transform: "translateY(-3px)",
              textShadow: "0 1px 1px #1e2f23, 0 -2px 1px #fff",
            }}
          >
            {undoneTodos.length}
          </div>
          &nbsp; remaining todos
        </div>
      </div>
    </TodoHeadStyle>
  );
};

export default TodoHead;
