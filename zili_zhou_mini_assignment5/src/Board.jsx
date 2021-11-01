import React from "react";
import Square from "./Square";
import "./Board.css";
import { useSelector } from "react-redux";

export default function Board() {
  const boardState = useSelector((state) => state.board);

  const boardcomponent = [];

  for (let i = 0; i < boardState.length; i++) {
    let row = boardState[i];
    for (let j = 0; j < row.length; j++) {
      boardcomponent.push(<Square color={boardState[i][j]} x={i} y={j} />);
    }
  }

  return (
    <div>
      <h1 id="head">Count{boardState[1]}</h1>
      <div id="board">{boardcomponent}</div>
    </div>
  );
}
