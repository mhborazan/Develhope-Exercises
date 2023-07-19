import React, { useRef, useState } from "react";

export default function TodoList() {
  const [items, setItems] = useState([]);
  const inputRef = useRef();
  const addTodo = () => {
    if (inputRef.current.value) {
      setItems([...items, inputRef.current.value]);
      inputRef.current.value = "";
    }
  };
  return (
    <div>
      <h3>Todo App</h3>
      <input type="text" ref={inputRef} />
      <button onClick={addTodo}>Add To Do</button>
      <ul>
        {items.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    </div>
  );
}
