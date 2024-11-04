import './App.css';
import { useState } from 'react';
import AddTaskForm from './components/AddTaskForm';
import Task from './components/Task';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Go shopping', completed: false },
    { id: 2, text: 'Call the doctor', completed: true },
    { id: 3, text: 'Workout', completed: false }
  ]);

  const ADD_TASK = (text) => {
    const NEW_TASK = {
      id: tasks.length + 1,
      text,
      completed: false
    };
    setTasks([...tasks, NEW_TASK]);
  };

  const DELETE_TASK = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const MARK_AS_COMPLETED = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <h1>Tasks</h1>
      <AddTaskForm addTask={ADD_TASK} />
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            deleteTask={DELETE_TASK}
            markAsCompleted={MARK_AS_COMPLETED}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;