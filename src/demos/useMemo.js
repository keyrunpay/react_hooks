function Child() {
  const rendRef = useRef(0);

  useEffect(() => {
    rendRef.current++;
  });

  return <p>Redered: {rendRef.current}</p>;
}

function App() {
  const [count, setCount] = useState(0);
  const [word, setWord] = useState("Hello");

  const computeLetterCount = (word) => {
    let i = 0;
    while (i < 1000000000) i++;

    return word.length;
  };

  // const letterCount = computeLetterCount(word);

  const letterCount = useMemo(() => computeLetterCount(word), [word]);

  return (
    <div className="App">
      <h1>Compute number of letters</h1>
      <p>
        {word} has {letterCount} letters
      </p>

      <button
        onClick={() => {
          setWord("" + Math.random());
        }}
      >
        Next word
      </button>

      <h1>Increment a counter</h1>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
