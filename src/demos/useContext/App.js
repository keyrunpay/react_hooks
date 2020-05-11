import React from "react";
import "./App.css";
import Nav from "./Nav";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import { TodoProvider } from "./TodoContext";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <Nav />
        <Todos />
        <AddTodo />
      </TodoProvider>
    </div>
  );
}

export default App;
