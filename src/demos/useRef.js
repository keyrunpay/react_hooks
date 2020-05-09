import React from "react";
import "./App.css";

function App() {
  const inputRef = React.useRef(0);

  const showInputValue = () => {
    console.log(inputRef.current);
  };

  React.useEffect(() => {
    console.log("component updated", new Date().toDateString());

    inputRef.current++;
  });

  return (
    <div className="App">
      <h1>UseRef hook #Buggged</h1>
      <input type="text" placeholder="Type something" />
      <br /> <br />
      <button onClick={showInputValue}>Log The Text Field</button>
    </div>
  );
}

export default App;
