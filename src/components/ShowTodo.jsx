export const ShowTodo = ({ todo, removeTodo, index }) => {
  const handleClick = () => {
    removeTodo(index);
  };

  return (
    <div className='todo'>
      <h3>{todo.time}</h3>
      <p>{todo.task}</p>
      <input type='checkbox' id={todo.id}></input>
      <button onClick={handleClick}>Remove</button>
    </div>
  );
};
