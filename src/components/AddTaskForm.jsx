import React, { useState } from 'react';

const AddTaskForm = ({ ADD_TASK }) => {
  const [text, setText] = useState('');

  const HANDLE_SUBMIT = (e) => {
    e.preventDefault();
    ADD_TASK(text);
    setText('');
  };

  return (
    <form onSubmit={HANDLE_SUBMIT}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTaskForm;