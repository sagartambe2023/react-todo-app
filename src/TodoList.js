import React from "react";

// TodoList component receives props including taskName, description, addTodo function,
// setTaskName function, and setDescription function
function TodoList({ taskName, description, addTodo, setTaskName, setDescription }) {
    return (
        <div className='todolist'>
            {/* Input field for entering todo name */}
            <input 
                type="text" 
                className="taskinput" 
                placeholder="Todo Name" 
                value={taskName} 
                onChange={(e) => setTaskName(e.target.value)} 
            />
            
            {/* Input field for entering todo description */}
            <input 
                type="text" 
                className="taskinput" 
                placeholder="Todo Description" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
            />
            
            {/* Button to add todo item */}
            <button 
                type="button" 
                className="btn addtodobtn" 
                onClick={addTodo} 
            >
                Add Todo
            </button>
        </div>
    );
}

export default TodoList;
