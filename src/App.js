
import "./App.css";

import React from 'react'
import Autocom from "./Autocom";
// import Carousel  from "./Component/Carousel";
import NavBar from "./Component/NavBar";
// import Watch from "./Watch"
import Stopwatch from "./Stopwatch"
// import Todolist from "./Todolist";

function App() {
  return (
    <div>
      <NavBar/> 
      {/* <Carousel/> */}
      {/* <Watch/>  */}
      <Stopwatch/>
      {/* <Todolist/> */}
      <Autocom/>
    </div>
  )
}

export default App

