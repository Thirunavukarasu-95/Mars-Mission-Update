// TaskForm.js
import React, { useState } from 'react';
import './TaskForm.css';
import { formContainerStyle } from './CommonStyles';

const TaskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [priority, setPriority] = useState('');
  const [dueTime, setDueTime] = useState('');
  const [assignee, setAssignee] = useState('');
  const [creator, setCreator] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      description,
      status,
      priority,
      dueTime,
      assignee,
      creator,
      comments,
    };
    onSubmit(newTask);
    // Clear form fields after submission
    setTitle('');
    setDescription('');
    setStatus('');
    setPriority('');
    setDueTime('');
    setAssignee('');
    setCreator('');
    setComments('');
  };

  return (
    <div className="task-form-container" style={formContainerStyle}>
      <h2>Create New Task</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          placeholder="Enter Title of a Task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="null"></option>
          <option value="To do">To do</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        <label>Description:</label>
        <input
          type="text"
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Priority:</label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="dropdown"
        >
          <option value="null"></option>
          <option value="Highest Priority">Highest Priority</option>
          <option value="High Priority">High Priority</option>
          <option value="Medium Priority">Medium Priority</option>
          <option value="Low Priority">Low Priority</option>
        </select>

        <label>Due Time:</label>
        <input
          type="time"
          placeholder="Enter Due Time"
          value={dueTime}
          onChange={(e) => setDueTime(e.target.value)}
        />

        <label>Assignee:</label>
        <input
          type="text"
          placeholder="Enter Assignee Name"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
        />

        <label>Creator:</label>
        <input
          type="text"
          placeholder="Enter Creator Name"
          value={creator}
          onChange={(e) => setCreator(e.target.value)}
        />

        <label>Comments:</label>
        <textarea
          placeholder="Enter Comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        ></textarea>

        <button type="submit">Create Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
