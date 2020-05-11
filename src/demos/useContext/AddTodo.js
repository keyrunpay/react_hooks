import React from "react";
import { TodoContext } from "./TodoContext";

export default function AddTodo() {
  const titleRef = React.useRef(null);
  const [todos, setTodos] = React.useContext(TodoContext);

  const handleAddTodo = (e) => {
    e.preventDefault();
    const todoItem = { title: titleRef.current.value, id: todos.length + 1 };
    setTodos([...todos, todoItem]);
    // todo add it
  };

  return (
    <div>
      <h1>Add Todo</h1>
      <form onSubmit={handleAddTodo}>
        <input type="text" placeholder="Title" ref={titleRef} />
        <button>Add Todo</button>
      </form>
    </div>
  );
}
