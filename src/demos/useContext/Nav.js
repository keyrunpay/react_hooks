import React from "react";
import { TodoContext } from "./TodoContext";

export default function Nav() {
  const [todos, setTodos] = React.useContext(TodoContext);

  return (
    <nav>
      <h1>Context API | useContext Hook</h1>
      <h1>Todo Count: {todos.length}</h1>
    </nav>
  );
}
