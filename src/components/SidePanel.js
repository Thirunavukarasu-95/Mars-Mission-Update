// SidePanel.js
import React from 'react';

const SidePanel = ({
  user,
  taskCount,
  deleteAllTasks,
  onView,
  onCreate,
}) => {
  return (
    <div className="side-panel">
      <div className="user-info">
        <h2 style={{ color: '#ff0000' }}>Current User: {user}</h2>
        <p style={{ color: '#YourDesiredColor' }}>Total Tasks: {taskCount}</p>
      </div>

      <button onClick={deleteAllTasks}>Delete All Tasks</button>

      <div className="task-actions">
        <button onClick={() => onCreate()}>Create New Task</button>
        <button onClick={onView}>View Task</button>
      </div>
    </div>
  );
};

export default SidePanel;
