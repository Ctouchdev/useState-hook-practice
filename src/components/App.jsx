import React, { useState } from "react";

function App() {
  const [time, setTime] = useState("TIME");

  function updateTime() {
    const time = new Date().toLocaleTimeString();
    setTime(time);
    setInterval(updateTime, 1000);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
