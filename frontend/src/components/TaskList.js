import React from 'react';

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <div className="task-list">
      {tasks.length === 0 ? <p>No tasks yet. Chill maaro!</p> : (
        tasks.map(task => (
          <div key={task._id} className="task-item">
            <span>{task.title}</span>
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;