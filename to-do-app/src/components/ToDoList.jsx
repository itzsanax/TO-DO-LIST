import ToDoItem from "./ToDoItem";

function ToDoList({ todos, onDelete, onToggleComplete, onEdit }) {
  return (
    <ul>
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onDelete={() => onDelete(todo.id)}
          onToggleComplete={() => onToggleComplete(todo.id)}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
