let val;

val = document.getElementById("task-title");
val = document.getElementById("task-title").id;

const taskTitle = document.getElementById("task-title")

taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';
//taskTitle.style.display = 'none';

taskTitle.textContent = 'My Tasks'
taskTitle.innerText = 'My favorite tasks'
taskTitle.innerHTML = '<span style="color: red;"">My Tasks</span>';

val = document.querySelector('#task-title');

document.querySelector('li').style.color = 'blue';
document.querySelector('ul li').style.color = 'green';
document.querySelector('li:last-child').style.color = 'red';

console.log(val);