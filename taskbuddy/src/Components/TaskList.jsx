import React, { useState } from "react";
import "../ComponentsCSS/TaskListCss.css";

export const TaskList = () => {
  const [tasks, settasks] = useState([
    { Name: "Sample Task 1", id: 1 },
    { Name: "Sample Task 2", id: 2 },
    { Name: "Sample Task 3", id: 3 },
  ]);

  const handleAddTask = () => {
    const newTask = prompt("Enter a new task:");
    settasks([
      ...tasks,
      { Name: newTask, id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1 },
    ]);
  };

  const deleteTask = (idToDelete) => {
    console.log("Delete task with id:", idToDelete);
    const filteredTasks = tasks.filter((task) => task.id !== idToDelete);
    settasks(filteredTasks);
  };
  return (
    <div className="page-container">
      <div className="task-wrapper">
        <h4 className="mb-4">📝 My Tasks</h4>
        {tasks.map((task) => (
          <div className="task-item">
            <span>{task.Name}</span>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => deleteTask(task.id)}
            >
              <i className="bi bi-trash"></i>
            </button>
          </div>
        ))}
        <button
          className="btn btn-primary add-task-btn"
          onClick={handleAddTask}
        >
          ➕ Add Task
        </button>
      </div>
    </div>
  );
};
export default TaskList;
