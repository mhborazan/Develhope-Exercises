import React, { useRef, useState } from "react";

export default function TodoList3() {
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
          <>
            <li key={i}>
              {e}
              <button key={100 + i} onClick={() => removeTodo(e)}>
                x
              </button>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}
