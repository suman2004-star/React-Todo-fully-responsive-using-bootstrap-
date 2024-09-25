import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {
    return (
        <div className='container'>
            <h1 className='text-center'>Please Enter Your Todo</h1>
            
            <AddTodo />
            <TodoList />
        </div>
    );
}

export default App;
