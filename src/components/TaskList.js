// TaskList.js
import React, { useState, useEffect } from 'react';
import './TaskList.css';

const TaskList = ({ tasks, viewTaskDetails, deleteTask, updateTask }) => {
  const [idCounter, setIdCounter] = useState(1);

  useEffect(() => {
    // Set the initial ID counter based on existing tasks
    if (tasks.length > 0) {
      const maxId = Math.max(...tasks.map((task) => task.id));
      setIdCounter(maxId + 1);
    }
  }, [tasks]);

  const generateId = () => {
    const newId = idCounter;
    setIdCounter((prevId) => prevId + 1);
    return newId;
  };

  return (
    <div className="task-list-container">
      <h2>Task List</h2>
      <table>
        <thead>
          <tr>
            <th>Select</th>
            <th>Title</th>
            <th>Assignee</th>
            <th>Creator</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{task.title}</td>
              <td>{task.assignee}</td>
              <td>{task.creator}</td>
              <td>
                <button
                  className="button view-details"
                  onClick={() => viewTaskDetails(task.id)}
                >
                  View Details
                </button>
                <button
                  className="button delete-button"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
                <button
                  className="button update-button"
                  onClick={() => updateTask(task.id, task)}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
