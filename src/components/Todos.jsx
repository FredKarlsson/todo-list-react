import { useState } from 'react';
import { ShowTodo } from './ShowTodo';
import { Todo } from '../models/Todo';
import { AddTodo } from './AddTodo';

export const Todos = () => {
  const [todos, setTodos] = useState([
    new Todo('06:00', 'Drink a tall glass of water'),
    new Todo('06:10', 'Get bright light in your eyes, preferably sunlight'),
    new Todo('06:30', 'Go to the gym'),
    new Todo('08:00', 'One hour of focused work, NO PHONE!'),
    new Todo(
      '09:00',
      'Take a break and do some easier chores, have some coffee'
    ),
    new Todo('09:15', 'One hour of focused work, NO PHONE!'),
    new Todo('10:15', 'Relax, go for a walk, have your first meal'),
    new Todo('12:00', 'One hour of focused, NO PHONE!'),
    new Todo('13:00', 'Do whatever you feel like'),
    new Todo('15:00', 'One hour of focused work, NO PHONE!'),
    new Todo('16:00', 'Make dinner'),
  ]);

  const addTodo = (time, task) => {
    let newTodo = new Todo(time, task);
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (i) => {
    let modifiedList = [...todos];
    modifiedList.splice(i, 1);

    setTodos(modifiedList);
  };

  const html = todos.map((todo, i) => {
    return <ShowTodo todo={todo} key={i} index={i} removeTodo={removeTodo} />;
  });

  return (
    <>
      <AddTodo addTodo={addTodo} />
      <div>{html}</div>
    </>
  );
};
