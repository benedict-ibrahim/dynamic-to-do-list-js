// Wait for the DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get and trim the task text from input field
        const taskText = taskInput.value.trim();

        // Check if the input is empty
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        // Create new list item element
        const listItem = document.createElement('li');
        
        // Create span element for task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        
        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-btn';
        
        // Add click event to delete button
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(listItem);
        });

        // Append elements to list item
        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteButton);
        
        // Add list item to task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
        
        // Focus back to input field for new task entry
        taskInput.focus();
    }

    // Event listener for Add button click
    addButton.addEventListener('click', addTask);

    // Event listener for Enter key press in input field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Optional: Add event listener for task completion toggle
    taskList.addEventListener('click', function(event) {
        if (event.target.tagName === 'SPAN') {
            event.target.classList.toggle('completed');
        }
    });
});