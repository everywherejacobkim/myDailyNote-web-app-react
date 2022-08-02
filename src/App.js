import React, { useState } from "react";
import "./App.css";
import AppHead from "./components/AppHead";
import Footer from "./components/Footer";
import MemoContainer from "./components/MemoContainer";
import MemoHead from "./components/MemoHead";
import QuoteContainer from "./components/QuoteContainer";
import QuoteHead from "./components/QuoteHead";
import QuoteItem from "./components/QuoteItem";
import TodoContainer from "./components/TodoContainer";
import TodoCreate from "./components/TodoCreate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import MemoItem from "./components/MemoItem";

function App() {
  const [chosenQuote, setChosenQuote] = useState(["life"]);
  const [memo, setMemo] = useState([]);
  return (
    <div className="App">
      <AppHead />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "1400px",
          margin: "0 auto",
        }}
      >
        <TodoContainer>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <MemoContainer>
            <MemoHead memo={memo} setMemo={setMemo} />
            <MemoItem memo={memo} setMemo={setMemo} />
          </MemoContainer>
          <QuoteContainer>
            <QuoteHead
              chosenQuote={chosenQuote}
              setChosenQuote={setChosenQuote}
            />
            <QuoteItem chosenQuote={chosenQuote} />
          </QuoteContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
