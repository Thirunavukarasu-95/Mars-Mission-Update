import React, { useState, useEffect } from 'react';
const formContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    margin: '0 auto',
    width: '50%',
  };
  
  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    fontSize: '14px',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };
  
  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#ff0606',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  };
const TaskDetails = ({ task, updateTask }) => {
  const [updatedTask, setUpdatedTask] = useState({
    title: task ? task.title : '',
    description: task ? task.description : '',
    status: task ? task.status : '',
    priority: task ? task.priority : '',
    dueTime: task ? task.dueTime : '',
    assignee: task ? task.assignee : '',
    creator: task ? task.creator : '',
    comments: task ? task.comments : '',
  });

  const [isEditMode, setEditMode] = useState(false);

  useEffect(() => {
    setUpdatedTask({
      title: task ? task.title : '',
      description: task ? task.description : '',
      status: task ? task.status : '',
      priority: task ? task.priority : '',
      dueTime: task ? task.dueTime : '',
      assignee: task ? task.assignee : '',
      creator: task ? task.creator : '',
      comments: task ? task.comments : '',
    });
    setEditMode(false);
  }, [task]);

  const handleChange = (event) => {
    setUpdatedTask({
      ...updatedTask,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateTask(task.id, updatedTask);
    setEditMode(false);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  return (
    <div className="task-details-container" style={formContainerStyle}>
      {task ? (
        <>
          {isEditMode ? (
            <form className="task-details-form" onSubmit={handleSubmit}>
              <label>Title:</label>
              <input
                type="text"
                name="title"
                value={updatedTask.title}
                onChange={handleChange}
                style={inputStyle}
                disabled={!isEditMode}
              />

              <label>Description:</label>
              <textarea
                name="description"
                value={updatedTask.description}
                onChange={handleChange}
                style={inputStyle}
                disabled={!isEditMode}
    
              ></textarea>

              <label>Status:</label>
              <select
                name="status"
                value={updatedTask.status}
                onChange={handleChange}
                style={inputStyle}
                disabled={!isEditMode}
    
              >
                <option value="To do">To do</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>

              <label>Priority:</label>
              <select
                name="priority"
                value={updatedTask.priority}
                onChange={handleChange}
                style={inputStyle}
                disabled={!isEditMode}
    
              >
                <option value="Highest Priority">Highest Priority</option>
                <option value="High Priority">High Priority</option>
                <option value="Medium Priority">Medium Priority</option>
                <option value="Low Priority">Low Priority</option>
              </select>

              <label>Due Time:</label>
              <input
                type="time"
                name="dueTime"
                value={updatedTask.dueTime}
                onChange={handleChange}
                style={inputStyle}
                disabled={!isEditMode}
    
              />

              <label>Assignee:</label>
              <input
                type="text"
                name="assignee"
                value={updatedTask.assignee}
                onChange={handleChange}
                style={inputStyle}
                disabled={!isEditMode}
    
              />

              <label>Creator:</label>
              <input
                type="text"
                name="creator"
                value={updatedTask.creator}
                onChange={handleChange}
                style={inputStyle}
                disabled={!isEditMode}
    
              />

              <label>Comments:</label>
              <textarea
                name="comments"
                value={updatedTask.comments}
                onChange={handleChange}
                style={inputStyle}
                disabled={!isEditMode}
    
              ></textarea>

{isEditMode && (
            <button type="submit" style={buttonStyle}>
              Update Task
            </button>
          )}
           {!isEditMode && (
            <button type="button" onClick={handleEdit} style={buttonStyle}>
              Edit Task
            </button>
          )}
            </form>
          ) : (
            <>
              <h2>{updatedTask.title}</h2>
              <p>Description: {updatedTask.description}</p>
              <p>Status: {updatedTask.status}</p>
              <p>Priority: {updatedTask.priority}</p>
              <p>Due Time: {updatedTask.dueTime}</p>
              <p>Assignee: {updatedTask.assignee}</p>
              <p>Creator: {updatedTask.creator}</p>
              <p>Comments: {updatedTask.comments}</p>
              <button onClick={handleEdit} style={buttonStyle}>
                Edit Task
              </button>
            </>
          )}
        </>
      ) : (
        <p>No task selected. Choose a task from the list.</p>
      )}
    </div>
  );
};

export default TaskDetails;