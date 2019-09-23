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
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear Task Event
  clearBtn.addEventListener('click', clearTasks);
}
// -----end loadEventListeners

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
// ------- end addTask

// Remve Task
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are you Sure')) {
      e.target.parentElement.parentElement.remove();
    }
    e.preventDefault();
  }
  

  // e.preventDefault();
}
// -------end removeTask

// Clear Tasks
function clearTasks(e) {
  // taskList.innerHTML = '';

  // Faster
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // https://jsperf.com/innerHtml-vs-removechild
  e.preventDefault();
}