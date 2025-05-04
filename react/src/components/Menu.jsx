
import React from "react";

export default function Menu({ onSelect }) {
  return (
    <div>
      <button onClick={() => onSelect("todo")}>To-do Lista</button>
      <button onClick={() => onSelect("rps")}>Kő-Papír-Olló</button>
    </div>
  );
}
