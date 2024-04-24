import { useState } from "react";
export default function Item({ item, onDelete, onComplete }) {
  return (
    <li>
      <button onClick={() => onComplete(item.key)}>✅</button>
      <span style={item.complete ? { textDecoration: "line-through" } : {}}>
        {item.name}
      </span>
      <button onClick={() => onDelete(item.key)}>❌</button>
    </li>
  );
}
