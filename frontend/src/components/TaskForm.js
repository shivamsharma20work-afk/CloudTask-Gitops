import React from 'react';

const TaskForm = ({ input, setInput, addTask }) => {
  return (
    <form onSubmit={addTask} className="task-form">
      <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Kya kaam baki hai bhai?"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;