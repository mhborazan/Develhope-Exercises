import React from "react";

export default function Todo(e, i, func) {
  return (
    <li key={i}>
      {e}
      <button key={100 + i} onClick={func}>
        x
      </button>
    </li>
  );
}
