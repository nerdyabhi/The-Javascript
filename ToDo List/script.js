const addTask = document.getElementById('addTask');
const TaskList = document.getElementById('taskList');
let localTasks = JSON.parse(localStorage.getItem('localToDo')) || [];
let noOfTasks = localTasks.length;

function addElement(element) {
  let div = document.createElement('div');
  div.innerHTML = `<li>
        <input type="checkbox" id="input${noOfTasks}">
        <label for="input${noOfTasks}">${element}</label>
        <button class="trash-can"><i class="fa fa-trash"></i></button>
    </li>`;
  TaskList.append(div);
  noOfTasks++;
}

localTasks.forEach((element) => {
  addElement(element);
});

addTask.addEventListener('click', (evt) => {
  evt.preventDefault();
  const taskInput = document.getElementById('taskInput');
  const task = taskInput.value.trim();
  taskInput.value = '';
  if (task !== '' && task && !localTasks.includes(task)) {
    localTasks.push(task);
    localTasks = [...new Set(localTasks)];
    localStorage.setItem('localToDo', JSON.stringify(localTasks));
    addElement(task);
  }
});

TaskList.addEventListener('click', (evt) => {
  if (
    evt.target.classList.contains('trash-can') ||
    evt.target.parentElement.classList.contains('trash-can')
  ) {
    let taskToRemove = evt.target.closest('li');
    let taskText = taskToRemove.querySelector('label').innerText.trim();
    localTasks = localTasks.filter((task) => task !== taskText);
    localStorage.setItem('localToDo', JSON.stringify(localTasks));
    taskToRemove.remove();
  }
});
