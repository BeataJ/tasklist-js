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

  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // create text node and appened to li
  li.appendChild(document.createTextNode(taskInput.value));
  // create link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // appened the link to li
  li.appendChild(link);

  // append li to ul
  taskList.appendChild(li);

  // Clear input
  taskList.value = '';

  e.preventDefault();
}