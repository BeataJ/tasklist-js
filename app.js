// Defin UI Vars
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-task");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all event listeners
loadEventListeners();

// load all enevt listeners fn
function loadEventListeners() {
  // DOM Load event
  document.addEventListener("DOMContentLoaded", getTasks);

  // Add task event
  form.addEventListener("submit", addTask);
  // Remove task event
  taskList.addEventListener("click", removeTask);
  // Clear Task Event
  clearBtn.addEventListener("click", clearTasks);
  // Filter tasks event
  filter.addEventListener("keyup", filterTasks);
}
// -----end loadEventListeners

// Get Tasks from LS
function getTasks() {
  let tasks;

  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(task => {
    // Create li element
    const li = document.createElement("li");
    // Add class
    li.className = "collection-item";
    // create text node and appened to li
    li.appendChild(document.createTextNode(task));
    // create link element
    const link = document.createElement("a");
    // Add class
    link.className = "delete-item secondary-content";
    // add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // appened the link to li
    li.appendChild(link);

    // append li to ul
    taskList.appendChild(li);
  });
}
// --------end getTasks

// add Task
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task");
  }

  // Create li element
  const li = document.createElement("li");
  // Add class
  li.className = "collection-item";
  // create text node and appened to li
  li.appendChild(document.createTextNode(taskInput.value));
  // create link element
  const link = document.createElement("a");
  // Add class
  link.className = "delete-item secondary-content";
  // add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // appened the link to li
  li.appendChild(link);

  // append li to ul
  taskList.appendChild(li);

  // Store in LS
  storeTaskInLocalStorege(taskInput.value);

  // Clear input
  taskList.value = "";

  e.preventDefault();
}
// ------- end addTask

// add to localstorage
function storeTaskInLocalStorege(task) {
  let tasks;

  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
}
// -----end add to localstorage

// Remove Task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you Sure")) {
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
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // https://jsperf.com/innerHtml-vs-removechild
  e.preventDefault();
}
// --------end Clear Tasks

// Filter Tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach(function(task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });

  console.log(text);
  e.preventDefault();
}
// -----end filter tasks
