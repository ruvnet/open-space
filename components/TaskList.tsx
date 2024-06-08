import React, { useState, useEffect } from 'react';
import styles from '../styles/TaskList.module.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from an API or local storage
    const fetchedTasks = [
      { id: 1, description: 'Complete project documentation', status: 'In Progress' },
      { id: 2, description: 'Implement authentication system', status: 'Pending' },
      { id: 3, description: 'Refactor backend code', status: 'Completed' }
    ];
    setTasks(fetchedTasks);
  }, []);

  return (
    <div className={styles.taskList}>
      <h2>Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.description} - <strong>{task.status}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
