import React from "react";
import { TodoContext } from "./TodoContext";

export default function Todos() {
  const [todos, setTodos] = React.useContext(TodoContext);

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}
