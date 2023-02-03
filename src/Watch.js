import React from 'react'
import { useState } from "react";
import "./App.css"
let adjustInterval = undefined

function Watch() {
    const [watch, setWatch] = useState();
    const [started, setStarted] = useState(false);
  
  
  
    const startWatch = () => {
      adjustInterval=setInterval(() => {
        setWatch((x) => x + 1);
      }, 1000);
      setStarted(true);
    };
    const stopWatch = () => {
      clearInterval(adjustInterval);
      setStarted(false);
    };
    const restWatch = () => {
      setWatch(0);
      clearInterval(adjustInterval);
      setStarted(false);
    };
  return (
    
    <div className="App">
      <h1>STOP WATCH</h1>
      <h1>{watch}</h1>
<button disabled={started} onClick={startWatch} id= "btn1" >
        Start
      </button>
      <button onClick={stopWatch} id= "btn2">Stop</button>
      <button onClick={restWatch} id= "btn3">Rest</button>
    </div>
  );
}

export default Watch
