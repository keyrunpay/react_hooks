import React from "react";
import "./App.css";
import { userReducer, userInitState, setLoading, setUser } from "./userReducer";

function App() {
  const [state, dispatch] = React.useReducer(userReducer, userInitState);

  const fetchUser = () => {
    const userData = [
      { id: 1, name: "Kiran" },
      { id: 2, name: "Buggged" },
    ];

    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setUser(userData));
    }, 3000);
  };

  return (
    <div className="App">
      <h1>useReducer Hook</h1>
      <button onClick={fetchUser}>Fetch User</button>
      <h2>User List</h2>

      {state.loading && <p>Loading ....</p>}
      {state.data && (
        <React.Fragment>
          <ul>
            {state.data.map((el) => {
              return <li key={el.id}>{el.name}</li>;
            })}
          </ul>
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
