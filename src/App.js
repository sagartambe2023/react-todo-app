import React, { useState, useEffect } from 'react';
import './App.css';
import Filter from "./Filter"
import Todo from "./Todo"
import TodoList from "./TodoList"

function App() {
  // State variables
  const [todos, setTodos] = useState(() => {
    const storedTodos  = localStorage.getItem("todos");
    return storedTodos  ? JSON.parse(storedTodos ) : [];
  });
  const [editTodo, setEditTodo] = useState(null);
  const [editedTaskName, setEditedTaskName] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // useEffect to save todos in localStorage when todos state changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // useEffect to set default todos if todos state is empty
  useEffect(() => {
    if (todos.length === 0) {
      const defaultTodos = [
        { id: 1, taskName: 'Office Task-1', description: 'this is the description for My First Task', completed: false },
        { id: 2, taskName: 'Office Task-2', description: 'this is the description for My Second Task', completed: false },
        { id: 3, taskName: 'Office Task-3', description: 'this is the description for My Third Task', completed: false }
      ];
      setTodos(defaultTodos);
    }
  }, [todos]);
  
  // Function to add a new todo
  const addTodo = () => {
    if (taskName.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        taskName,
        description,
        completed: false
      };
      setTodos([...todos, newTodo]);
      setTaskName('');
      setDescription('');
    }
  };

  // Function to delete a todo by id
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Function to toggle the status of a todo by id
  const toggleStatus = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Function to filter todos based on status
  const filterTodos = (status) => {
    setStatusFilter(status);
  };

  // Filtered todos based on status
  const filteredTodos = todos.filter(todo => {
    if (statusFilter === 'completed') {
      return todo.completed;
    } else if (statusFilter === 'notCompleted') {
      return !todo.completed;
    } else {
      return true;
    }
  });

  // Function to open edit modal for a todo
  const openEditModal = (todo) => {
    setEditTodo(todo);
    setEditedTaskName(todo.taskName);
    setEditedDescription(todo.description);
  };

  // Function to close edit modal
  const closeEditModal = () => {
    setEditTodo(null);
  };

  // Function to update todo after editing
  const updateTodo = () => {
    setTodos(todos.map(todo =>
      todo.id === editTodo.id ? { ...todo, taskName: editedTaskName, description: editedDescription } : todo
    ));
    setEditTodo(null);
  };

  return (
    <div className="App">
      {/* App title */}
      <h1 className='appTitle'>My Todo</h1>
      
      {/* TodoList component */}
      <TodoList taskName={taskName} description={description} addTodo={addTodo} setTaskName={setTaskName} setDescription={setDescription} />
      <br />
      <br />
      {/* Filter component */}
      <Filter filterTodos={filterTodos} statusFilter={statusFilter}/>
      <br />
      {/* Todo component */}
      <Todo todos={filteredTodos} editTodo={editTodo} editedTaskName={editedTaskName} setEditedTaskName={setEditedTaskName} editedDescription={editedDescription} setEditedDescription={setEditedDescription} updateTodo={updateTodo} closeEditModal={closeEditModal} deleteTodo={deleteTodo} openEditModal={openEditModal} toggleStatus={toggleStatus}/>
    </div>
  );
}

export default App;
