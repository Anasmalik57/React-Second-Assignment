import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="btn" onClick={()=>setCount(count-1)}>Decreament</div>
      <div className="numeric">{count}</div>
      <div className="btn btn2" onClick={()=>setCount(count+1)}>Increament</div>
    </div>
  )
}

export default App;
