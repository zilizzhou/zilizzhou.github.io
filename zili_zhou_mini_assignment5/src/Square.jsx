import React from "react";
import "./index.css";
import "./Square.css";
import { useDispatch } from 'react-redux';


export default function Square(props) {
  const color = props.color;
 

  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch({
        type: 'boardClick',
        x: props.x,
        y: props.y, 
      })}
      id="square"
      style={{ backgroundColor: color}}
    >     
    </div>
  );
}
