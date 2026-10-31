import { useState } from "react";

function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  // Add a new todo
  const addTodo = () => {
    if (input.trim() === "") return;

    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: input },
    ]);

    setInput("");
  };

  // Delete a todo using its id
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h2>Todo List</h2>

      <input
        type="text"
        value={input}
        placeholder="Enter a task"
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;