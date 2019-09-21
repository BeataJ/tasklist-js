// Defin UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// load all enevt listeners fn
function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);
}

// add Task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  }

  e.preventDefault();
}