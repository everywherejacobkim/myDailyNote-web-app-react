import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";
import { useTodoDispatch, useTodoNextId } from "../context/TodoContext";

const CircleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  font-size: 60px;
  color: white;
  border: none;
  border-radius: 40px;
  outline: none;
  background: #6d985c;
  width: 80px;
  height: 80px;
  cursor: pointer;
  z-index: 999;

  &:hover {
    background: #52796f;
  }
  &:active {
    background: #354f52;
  }

  ${(props) =>
    props.open &&
    css`
      background: #f8ad9d;
      &:hover {
        background: #f4978e;
      }
      &:active {
        background: #f08080;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}

  transition: 125ms all ease-in;
`;

const ModalStyle = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const Modal = styled.form`
  background: #fefae0;
  padding: 30px;
  padding-bottom: 55px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  width: 100%;
  outline: none;
  font-size: 18px;
`;

const TodoCreate = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggle = () => {
    setOpen(!open);
  };
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE",
      todo: {
        id: nextId.current,
        text: value,
        done: false,
      },
    });
    setValue("");
    setOpen(false);
    nextId.current += 1;
  };

  return (
    <>
      {open && (
        <ModalStyle>
          <Modal onSubmit={onSubmit}>
            <Input
              placeholder="Add a new todo and press enter"
              onChange={onChange}
              value={value}
              autoFocus
            />
          </Modal>
        </ModalStyle>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
};

export default TodoCreate;
