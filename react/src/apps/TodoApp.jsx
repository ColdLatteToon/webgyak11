
import React, { useState } from "react";

export default function TodoApp() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const addItem = () => {
    if (text.trim()) {
      setItems([...items, text]);
      setText("");
    }
  };

  return (
    <div>
      <h2>To-do Lista</h2>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={addItem}>Hozzáadás</button>
      <ul>
        {items.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}
