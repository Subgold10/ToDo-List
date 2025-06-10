import React, { useState } from "react";
import "../App.css";

function ToDoItem({ todo, onMarkCompleted, onDeleteTodo, onEditTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    if (editText.trim() !== "") {
      onEditTodo(todo.id, editText);
      setIsEditing(false);
    }
  };

  const handleCancelEdit = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSaveEdit();
    } else if (e.key === "Escape") {
      handleCancelEdit();
    }
  };

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      {isEditing ? (
        <div className="edit-mode">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
          <button onClick={handleSaveEdit} className="save-button">
            Save
          </button>
          <button onClick={handleCancelEdit} className="cancel-button">
            Cancel
          </button>
        </div>
      ) : (
        <>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onMarkCompleted(todo.id)}
            className="checkbox"
          />
          <span className="todo-text" onDoubleClick={handleEdit}>
            {todo.text}
          </span>
          <div className="actions">
            <button onClick={handleEdit} className="edit-button">
              Edit
            </button>
            <button
              onClick={() => onDeleteTodo(todo.id)}
              className="delete-button"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default ToDoItem;
