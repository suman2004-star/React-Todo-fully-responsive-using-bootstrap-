import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo, removeTodo, toggleComplete } from '../slice/slice'; // Import actions from Redux

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.text); // Use 'text' instead of 'todo'
    
    const dispatch = useDispatch(); // Get the dispatch function from Redux

    const editTodo = () => {
        dispatch(updateTodo({ id: todo.id, text: todoMsg })); // Dispatch the updateTodo action
        setIsTodoEditable(false);
    };

    const toggleCompleted = () => {
        dispatch(toggleComplete({ id: todo.id })); // Dispatch the toggleComplete action
    };

    return (
        <div className="d-flex mb-3">
  {/* Checkbox */}
  <input
    type="checkbox"
    className="form-check-input cursor-pointer me-3"
    checked={todo.complete}
    onChange={toggleCompleted}
  />

  {/* Todo Text Input (Full Width) */}
  <input
    type="text"
    className="form-control w-100 me-3"
    value={todoMsg}
    onChange={(e) => setTodoMsg(e.target.value)}
    readOnly={!isTodoEditable}
  />

  {/* Edit, Save Button */}
  <button
    className={`btn ${todo.complete ? "btn-secondary" : "btn-warning"} me-2`}
    onClick={() => {
      if (todo.complete) return;

      if (isTodoEditable) {
        editTodo();
      } else {
        setIsTodoEditable(true);
      }
    }}
    disabled={todo.complete}
  >
    {isTodoEditable ? "📁" : "✏️"}
  </button>

  {/* Delete Button */}
  <button
    className="btn btn-danger"
    onClick={() => dispatch(removeTodo(todo.id))}
  >
    ❌
  </button>
</div>

    );
}

export default TodoItem;
