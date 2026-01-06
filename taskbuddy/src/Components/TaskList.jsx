import React, { useState } from "react";
import "../ComponentsCSS/TaskListCss.css";
import { TaskCard } from "./TaskCard";
import { AddTaskModal } from "./AddTaskModal";
import { EditTaskModal } from "./EditTaskModal";

export const TaskList = ({info}) => {
  const [tasks, settasks] = useState([
    { Name: "Sample Task 1", id: 1, completed: false },
    { Name: "Sample Task 2", id: 2, completed: false },
    { Name: "Sample Task 3", id: 3, completed: false },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [mode, setMode] = useState("add");
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleEditTask = (task) => {
    setMode("edit");
    setTaskToEdit(task);
    setShowModal(true);
  };

  const deleteTask = (idToDelete) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      settasks(tasks.filter((task) => task.id !== idToDelete));
    }
  };

  const markAsCompleted = (id) => {
    settasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleAddTask = () => {
    setMode("add");
    setTaskToEdit(null);
    setShowModal(true);
  };

  const handleSave = (taskName) => {
    if (mode === "add") {
      settasks([
        ...tasks,
        {
          Name: taskName,
          id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
          completed: false,
        },
      ]);
    } else if (mode === "edit") {
      settasks(
        tasks.map((task) =>
          task.id === taskToEdit.id ? { ...task, Name: taskName } : task
        )
      );
    }
    setShowModal(false);
  };

  return (
    <div className="page-container">
      <div className="task-wrapper">
        <h4 className="mb-4"> My Tasks</h4>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            markAsCompleted={markAsCompleted}
            deleteTask={deleteTask}
            handleEditTask={() => handleEditTask(task)}
            info={info}
          />
        ))}

       {showModal && (
  mode === "add" ? (
    <AddTaskModal
      show={showModal}
      onClose={() => setShowModal(false)}
      onSave={handleSave}
    />
  ) : (
    <EditTaskModal
      show={showModal}
      onClose={() => setShowModal(false)}
      task={taskToEdit}
      onSave={handleSave}
    />
  )
)}


        <button
          className="btn btn-primary add-task-btn"
          onClick={handleAddTask}
        >
          + Add Task
        </button>
      </div>
    </div>
  );
};

export default TaskList;
