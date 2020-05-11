import React, { useCallback, useMemo } from "react";
import "./App.css";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

function App() {
  const [count, setCount] = React.useState(0);
  const [coin, setCoin] = React.useState(50);

  const increaseCount = useCallback((n) => {
    setCount((pc) => pc + n);
  }, []);

  const increaseCoins = useCallback((n) => {
    setCoin((pc) => pc + n);
  }, []);

  // const thisObj = useMemo(() => ({ name: "kiran", ch: "buggged" }), []);
  const thisObj = { name: "kiran", ch: "buggged" };
  // const arr = [1, 2, 3, 4, 5];

  return (
    <div className="App">
      <Title text="useCallback Hook" thisObj={thisObj} />

      <Count text="Count: " value={count} />
      <Button forWhat="Count" onClick={increaseCount} n={5} />

      <Count text="Coins: " value={coin} />
      <Button forWhat="Coins" onClick={increaseCoins} n={1} />
    </div>
  );
}

export default App;
