import React from 'react';
import TodoItem from './TodoItem';

const Todos = ({todos  , removeTodo }) => {
  return todos ? (
    <>
        {todos.map(todo => (
            <TodoItem todo={todo} key={todo.id} id={todo.id}  removeTodo={removeTodo} />
        ))}
    </>
  ): null;
}

export default Todos;