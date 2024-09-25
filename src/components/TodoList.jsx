import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './Todoitem'; 

const TodoList = () => {
   
    const todos = useSelector((state) => state.todos.todos);

    return (
        <div>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} /> 
            ))}
        </div>
    );
};

export default TodoList;
