import React from "react";

// Filter component takes in two props: filterTodos function and statusFilter value
function Filter({ filterTodos, statusFilter }) {
    return (
        // Container div for the filter component
        <div className='Statuslist'>
            {/* Heading */}
            <p>My Todos</p>
            {/* Dropdown menu for status filter */}
            <div>
                {/* Label for the dropdown */}
                <label> Status Filter : </label>
                {/* Dropdown select element */}
                <select
                    className='all'
                    // Value of the select element set to statusFilter prop
                    value={statusFilter} 
                    // onChange event handler triggers filterTodos function with the selected value
                    onChange={(e) => filterTodos(e.target.value)} 
                >
                    {/* Option for displaying all todos */}
                    <option value="all">All</option>
                    {/* Option for displaying completed todos */}
                    <option value="completed">Completed</option>
                    {/* Option for displaying not completed todos */}
                    <option value="notCompleted">Not Completed</option>
                </select>
            </div>
        </div>
    );
}

// Exporting Filter component
export default Filter;
