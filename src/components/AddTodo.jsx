import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../slice/slice'; // Ensure the path is correct



function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (input.trim()) {
            dispatch(addTodo(input)); // Dispatch with input string directly
            setInput('');
        }
    };

    return (
        <div className='row mb-4'>
  <form className="d-flex w-100" onSubmit={addTodoHandler}>
    <input
      type="text"
      className="form-control  me-2"
      placeholder="Enter a Todo..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
    <button
      type="submit"
      className="btn btn-success"
    >
      Add
    </button>
  </form>
</div>


        
        
    );
}

export default AddTodo;
