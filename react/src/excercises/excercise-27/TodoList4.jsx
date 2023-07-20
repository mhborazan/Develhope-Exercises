import React, { useRef, useState } from "react";
import Todo from "./Todo";

export default function TodoList4() {
  const [items, setItems] = useState([]);
  const inputRef = useRef();
  const addTodo = () => {
    if (inputRef.current.value) {
      setItems([...items, inputRef.current.value]);
      inputRef.current.value = "";
    }
  };
  const removeTodo = (i) => {
    setItems([...items.filter((item) => item != i)]);
  };
  return (
    <div>
      <h3>Todo App</h3>
      <input type="text" ref={inputRef} />
      <button onClick={addTodo}>Add To Do</button>
      <button onClick={() => setItems([])}>Reset</button>
      <ul>
        {items.map((e, i) => (
          <Todo e={e} i={i} func={() => removeTodo(i)} />
        ))}
      </ul>
    </div>
  );
}
