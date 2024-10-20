import { useState } from "react";

function ToDoItem({ todo, onDelete, onToggleComplete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(todo.text);

  function handleEditSubmit(e) {
    e.preventDefault();
    onEdit(todo.id, updatedText);
    setIsEditing(false);
  }

  return (
    <li className={todo.completed ? 'completed' : ''}>
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <input
            type="text"
            value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <>
          <span>{todo.text}</span>
          <button
            className="action-btn edit-btn"
            onClick={() => setIsEditing(true)}
          >Edit✏️
          </button>
          <button
            className="action-btn"
            onClick={() => onToggleComplete(todo.id)}
          >
            {todo.completed ? 'Undo' : 'Completed ✔️'}
          </button>
          <button
            className="action-btn delete-btn"
            onClick={() => onDelete(todo.id)}
          > Delete 🗑️
          </button>
        </>
      )}
    </li>
  );
}

export default ToDoItem;
