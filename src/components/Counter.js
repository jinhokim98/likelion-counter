import React, { useState } from "react";
import { styled } from "styled-components";
import background from "../image/background.jpg";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [closeState, setCloseState] = useState(false);
  const countUp = () => {
    setCount((prev) => prev + 1);
  };
  const countDown = () => {
    setCount((prev) => prev - 1);
  };
  const NotepadClose = () => {
    setCloseState(true);
  };
  return (
    <CounterContainer>
      <Notepad closeState={closeState}>
        <NotepadHeader>
          <CloseButton onClick={NotepadClose}>x</CloseButton>
        </NotepadHeader>
        <Count isNegative={count < 0}>{count}</Count>
        <ButtonContainer>
          <UpButton onClick={countUp}>Up</UpButton>
          <DownButton onClick={countDown}>Down</DownButton>
        </ButtonContainer>
      </Notepad>
    </CounterContainer>
  );
}

const CounterContainer = styled.div`
  width: 700px;
  height: 400px;
  margin: 0 auto;
  border: 10px solid black;
  background-color: skyblue;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Notepad = styled.div`
  display: ${(props) => (!props.closeState ? "block" : "none")};
  width: 300px;
  height: 300px;
  margin: 30px auto;
  padding: 12px 20px;
  background-color: white;
  border: 2px solid black;
  border-radius: 8px;
`;

const Count = styled.div`
  margin-top: 30px;
  color: ${(props) => (props.isNegative ? "red" : "blue")};
  text-align: center;
  font-size: 50px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin: 0 auto;
  margin-top: 100px;
`;
const UpButton = styled.button`
  width: 100px;
  height: 50px;
  border: none;
  color: white;
  background-color: blue;
  border-radius: 10px;
  font-size: 30px;
  &:hover {
    cursor: pointer;
  }
`;
const DownButton = styled.button`
  width: 100px;
  height: 50px;
  border: none;
  color: white;
  background-color: red;
  border-radius: 10px;
  font-size: 30px;
  &:hover {
    cursor: pointer;
  }
`;

const NotepadHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 30px;
`;

const CloseButton = styled.button`
  width: 20px;
  height: 20px;
  color: white;
  background-color: red;
  border: 1px solid white;
  border-radius: 5px;
  font-size: 12px;
  &:hover {
    cursor: pointer;
  }
`;
