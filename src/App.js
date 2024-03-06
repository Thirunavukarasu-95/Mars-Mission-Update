// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskDetails from './components/TaskDetails';
import TaskModel from './components/TaskModel';
import SidePanel from './components/SidePanel';
import './styles.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isTaskFormVisible, setTaskFormVisible] = useState(false);

  const handleCreateTask = (newTask) => {
    const task = new TaskModel(
      tasks.length + 1,
      newTask.title,
      newTask.description,
      newTask.status,
      newTask.priority,
      newTask.dueTime,
      newTask.assignee,
      newTask.creator,
      newTask.comments
    );
    setTasks((prevTasks) => [...prevTasks, task]);
    setTaskFormVisible(false);
  };

  const toggleTaskForm = () => {
    setTaskFormVisible(!isTaskFormVisible);
    setSelectedTask(null);
  };

  const handleViewTaskDetails = (taskId) => {
    const selected = tasks.find((task) => task.id === taskId);
    console.log('Selected Task:', selected);
    setSelectedTask({ ...selected, id: taskId });
    setTaskFormVisible(false);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    setSelectedTask(null);
  };

  const updateTask = (taskId, updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, ...updatedTask } : task
      )
    );
    setSelectedTask(null);
  };

  const deleteAllTasks = () => {
    setTasks([]);
    setSelectedTask(null);
  };

  return (
    <div>
      <Header />
      <div className="main-content">
        <div className="sidebar">
          <SidePanel
            user="Thirunavukarasu Sakthivel"
            taskCount={tasks.length}
            deleteAllTasks={deleteAllTasks}
            onView={() => {
              setTaskFormVisible(false);
              setSelectedTask(null);
            }}
            onUpdate={() => setTaskFormVisible(true)}
            onDelete={() => {
              if (selectedTask) {
                deleteTask(selectedTask.id);
              }
            }}
            onCreate={() => {
              toggleTaskForm();
              setSelectedTask(null);
            }}
          />
        </div>
        <div className="content">
          {isTaskFormVisible && <TaskForm onSubmit={handleCreateTask} />}
          {selectedTask ? (
            <TaskDetails task={selectedTask} updateTask={updateTask} />
          ) : (
            <TaskList
              tasks={tasks}
              viewTaskDetails={handleViewTaskDetails}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
