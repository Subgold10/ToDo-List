import React from "react";
import ToDoItem from "./ToDoItem";
import "../App.css";

function ToDoList({ todos, onMarkCompleted, onDeleteTodo, onEditTodo }) {
  return (
    <div className="todo-list-container">
      {todos.length === 0 ? (
        <p className="no-todos-message">No tasks yet. Add some!</p>
      ) : (
        <ul className="todo-list">
          {todos.map((todo) => (
            <ToDoItem
              key={todo.id}
              todo={todo}
              onMarkCompleted={onMarkCompleted}
              onDeleteTodo={onDeleteTodo}
              onEditTodo={onEditTodo}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ToDoList;
