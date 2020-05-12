import React from "react";
import "./App.css";
import Axios from "axios";

function useFetch(url) {
  const [state, setState] = React.useState({
    data: null,
    loading: false,
  });

  React.useEffect(() => {
    setState({ loading: true, data: null });
    Axios.get(url)
      .then((res) => {
        setState({ loading: false, data: res.data });
      })
      .catch(console.log);
  }, [url]);

  return { ...state };
}

function App() {
  const [url, setUrl] = React.useState(
    "https://jsonplaceholder.typicode.com/albums"
  );
  const { data, loading } = useFetch(url);

  const changeUrl = () => {
    setUrl("https://jsonplaceholder.typicode.com/todos");
  };

  return (
    <div className="App">
      <h1>React Custom Hooks</h1>
      <br />
      <button onClick={changeUrl}>Switch to Todos</button>
      <h1>Albums</h1>
      {loading && <p>Loading</p>}
      {data && (
        <ul>
          {data.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default App;
