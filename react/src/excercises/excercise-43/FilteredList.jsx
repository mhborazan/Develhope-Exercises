import React, { useMemo } from "react";

export default function FilteredList({ list }) {
  const objectList = useMemo(() => list);
  return objectList.map((e, i) => {
    if (e.age > 17) {
      return (
        <li key={i}>
          <ul>
            <li>{e.id}</li>
            <li>{e.name}</li>
            <li>{e.age}</li>
          </ul>
        </li>
      );
    }
  });
}
