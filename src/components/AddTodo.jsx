import { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
  //   const [todo, setTodo] = useState(new Todo('', '', false));
  const [time, setTime] = useState('');
  const [task, setTask] = useState('');

  //   const handleChange = (e) => {
  //     setTodo({ ...todo, [e.target.name]: e.target.value });
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(time, task);
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input
        placeholder='Time'
        value={time}
        onChange={(e) => {
          setTime(e.target.value);
        }}
        name='time'
      />
      <input
        placeholder='Task'
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
        name='task'
      />
      <button>Save</button>
    </form>
  );
};
