import React from "react";
import { useState } from "react";
import "./App.css";

export default function Todolist() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  const changeData = (e) => {
    setInput(e.target.value);
  };

  const change = () => {
    setData([...data, input]);
    setInput("");
  };
  const del =(index) =>{
    let reduceTodo=[...data]
    reduceTodo.splice(index)
    setData(reduceTodo)
  }

  return (
    <>
    <div className="App">
      <input type="text" value={input} onChange={(e) => changeData(e)} />
      <button onClick={change}>Add</button>
      {data.map((data) => (
        <div>
        <li>{data}</li>
        <button onClick={del}> Dlt</button>
        </div>
      ))}
      </div>
    </>
  );
}
