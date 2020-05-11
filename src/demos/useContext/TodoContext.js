import React from "react";

export const TodoContext = React.createContext();

export const TodoProvider = (props) => {
  const [todos, setTodos] = React.useState([
    { title: "watch react video from buggged", id: 1 },
    { title: "watch html video", id: 2 },
    { title: "watch movie threeIdiot", id: 3 },
    { title: "watch movie ironMan", id: 4 },
  ]);

  return (
    <TodoContext.Provider value={[todos, setTodos]}>
      {props.children}
    </TodoContext.Provider>
  );
};
