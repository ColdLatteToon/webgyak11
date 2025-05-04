
import React, { useState } from "react";
import Menu from "./components/Menu";
import TodoApp from "./apps/TodoApp";
import RPSApp from "./apps/RPSApp";

function App() {
  const [page, setPage] = useState("todo");

  return (
    <div>
      <Menu onSelect={setPage} />
      <div style={{ marginTop: "20px" }}>
        {page === "todo" && <TodoApp />}
        {page === "rps" && <RPSApp />}
      </div>
    </div>
  );
}

export default App;
