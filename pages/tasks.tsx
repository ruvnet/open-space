import { useState } from 'react';
import styles from '../styles/Tasks.module.css';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    setTasks([...tasks, { description: newTask, status: 'new' }]);
    setNewTask("");
  };

  return (
    <div className={styles.container}>
      <h1>Tasks</h1>
      <input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
