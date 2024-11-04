import React from 'react';

const Task = ({ task, deleteTask, markAsCompleted }) => {
  const HANDLE_DELETE = () => {
    deleteTask(task.id);
  };

  const HANDLE_MARK_AS_COMPLETED = () => {
    markAsCompleted(task.id);
  };

  return (
    <li>
      <span>
        ID: {task.id} -{' '}
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.text}
        </span>
      </span>
      <button onClick={HANDLE_DELETE}>Delete</button>
      <button onClick={HANDLE_MARK_AS_COMPLETED}>
        {task.completed ? 'De-mark' : 'Mark as completed'}
      </button>
    </li>
  );
};

export default Task;