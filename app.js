const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('ul');
const removeList = document.getElementById('removeAllbtn');
const filterInput = document.querySelector('#filter');

form.addEventListener('submit', addTask);
taskList.addEventListener('click', removeFromList);
removeList.addEventListener('click', removeAll);
document.addEventListener('DOMContentLoaded', getTasks);
filterInput.addEventListener('keyup', filterTasks);

function addTask(e) {
    const li = document.createElement('li');

    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));

    const link = document.createElement('a');
    link.className = 'secondary-content red-text text-darken-2'
    link.appendChild(document.createTextNode('X'));
    link.setAttribute('href', '#');

    li.appendChild(link);
    taskList.appendChild(li);

    storeTaskInLocalStorage(taskInput.value);

    taskInput.value = '';

    e.preventDefault();
}

function removeFromList(a) {
    if(a.target.textContent == 'X'){
        if(confirm("Kas soovite antud ylesande kustutada")){
            a.target.parentElement.remove();
            removeTaskFromLocalStorage(a.target.parentElement.textContent);
        }
    }
}

function removeAll(w){
    if(confirm("Kas soovite antud ylesande kustutada")){
        if(w.target.id == 'removeAllbtn'){
            taskList.innerHTML = "";
        }
        localStorage.clear();
    }
}

function storeTaskInLocalStorage(task=null) {
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
     tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTaskFromLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
} else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
}
    tasks.forEach(function(element, index){
        if(element == task.slice(0, -1)){
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasks(e){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  
  tasks.forEach(function(task){
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(task));
  
    const link = document.createElement('a');
    link.className = 'secondary-content red-text text-darken-2';
    link.appendChild(document.createTextNode('X'));
    link.setAttribute('href', '#');
    li.appendChild(link);

    taskList.appendChild(li);
  });
}

function filterTasks(e){
    const text = e.target.value.toLowerCase();
    const tasks = document.querySelectorAll('li');
    tasks.forEach(function(li){
        const task = li.firstChild.textContent.toLowerCase();
        if(task.indexOf(text) != -1) {
            li.style.display = 'block';
        } else {
            li.style.display = 'none';
        }
    });
}