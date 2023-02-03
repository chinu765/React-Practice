import React,{useEffect,useState} from "react";
import "./App.css"

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    useEffect(() => {
      let interval;
      if (running) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 10);
        }, 10);
      } else if (!running) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [running]);
    return (
      <div className="App">
        <div className="numbers">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
        <div>
          <button onClick={() => setRunning(true)} className="bt1" disabled={running}>Start</button>
          <button onClick={() => setRunning(false)} className="bt2" disabled={!running}>Stop</button>
          <button onClick={() => setTime(0)} className="bt3">Reset</button>       
        </div>
        <div>
            <h1>{setTime}</h1>
        </div>
      </div>
    );
  };
  export default Stopwatch