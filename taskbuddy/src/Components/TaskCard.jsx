


export const TaskCard = ({ task, deleteTask, markAsCompleted, handleEditTask,info }) => {
  return (
    <>
      <div className="task-item" key={task.id}>
        <span className={task.completed ? "completed-task" : ""}>
          {task.Name} {info}
        </span>

        <div className="task-actions">
          <button
            className="btn btn-md btn-primary"
            style={{ marginRight: 10 }}
            title="Edit Task"
            onClick={() => handleEditTask(task.id)}
          >
            🖉
          </button>

          {task.completed ? (
            <span
              className="btn btn-md btn-success"
              style={{ marginRight: 10 }}
              title="This task is completed"
              onClick={() => markAsCompleted(task.id)}
            >
              Completed
            </span>
          ) : (
            <button
              className="btn btn-md btn-success"
              style={{ marginRight: 10 }}
              onClick={() => markAsCompleted(task.id)}
              title="Mark as Complete"
            >
              &#9745;
            </button>
          )}

          <button
            className="btn btn-md btn-danger"
            title="Delete the task"
            onClick={() => deleteTask(task.id)}
          >
            🗑
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
