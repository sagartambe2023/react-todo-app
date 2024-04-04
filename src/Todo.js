import React from "react";

function Todo({
  // Destructuring props for easier access
  todos,
  editTodo,
  editedTaskName,
  updateTodo,
  closeEditModal,
  deleteTodo,
  openEditModal,
  toggleStatus,
  setEditedTaskName,
  editedDescription,
  setEditedDescription
}) {
  return (
    <div className="todo-list">
      {/* Mapping over todos to render each todo item */}
      {todos.map((todo) => (
        <div key={todo.id} className="todo-card">
          {/* Conditionally rendering edit mode */}
          {editTodo && editTodo.id === todo.id ? (
            <div className="edit-mode">
              <h6 style={{textAlign:"center", color:"red", textDecoration:"underline"}}>EDIT DATA</h6>
              {/* Input fields for editing task name and description */}
              <label htmlFor="editedTaskName">Name:</label>
              <input
                type="text"
                id="editedTaskName"
                value={editedTaskName}
                onChange={(e) => setEditedTaskName(e.target.value)}
              />
              <label htmlFor="editedDescription">Description:</label>
              <input
                type="text"
                id="editedDescription"
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
              />
              {/* Buttons for submitting edit or canceling */}
              <div className="edittwobuttons">
                <button className="submit" onClick={updateTodo}>
                  Submit
                </button>
                <button className="cancel" onClick={closeEditModal}>
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* Displaying todo name, description, and status */}
              <h3 className="cardfont">Name: {todo.taskName}</h3>
              <p className="cardfont">Description: {todo.description}</p>
              <p className="cardfont">
                Status
                {/* Dropdown for changing status */}
                <select
                  className="Completed com"
                  value={todo.completed ? "completed" : "notCompleted"}
                  onChange={() => toggleStatus(todo.id)}
                  style={{
                    backgroundColor: todo.completed
                      ? "rgb(24, 152, 101)"
                      : "#EE959E",
                  }}
                >
                  <option value="completed" className="Completed">
                    Completed
                  </option>
                  <option value="notCompleted" className="Not-Completed">
                    Not Completed
                  </option>
                </select>
              </p>
              {/* Buttons for editing and deleting todo */}
              <div className="lastbuttons">
                <button className="editbutton" onClick={() => openEditModal(todo)}>
                  Edit
                </button>
                <button className="deletebutton" onClick={() => deleteTodo(todo.id)}>
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Todo;
