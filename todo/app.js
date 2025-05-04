const { useState } = React;

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  function addTask() {
    if (text.trim() === '') return;
    setTasks([...tasks, text]);
    setText('');
  }

  function deleteTask(index) {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  }

  return (
    <div>
      <h2>To-do Lista</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Új feladat..."
      />
      <button onClick={addTask}>Hozzáadás</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<TodoApp />);
