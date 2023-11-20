import { useState } from "react";
import style from "./styles.css";

export default function App() {
  const [value, setValue] = useState();

  return (
    <div className="App">
      <h4
        style={{
          backgroundImage: `linear-gradient(to right, red ${value}%, teal 0%)`,
          WebkitBackgroundClip: "text",
          color: "transparent",
          display: "inline-block"
        }}
      >
        Slide for Effect
      </h4>
      <input
        type="range"
        min="0"
        max="100"
        name="slider"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {/* create circle */}
      <div
        className="circle"
        style={{
          backgroundImage: `conic-gradient(red 0,red ${value}%, teal 0,teal 360deg)`
        }}
      ></div>
    </div>
  );
}
