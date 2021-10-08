const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('ul')

form.addEventListener('submit', addToList)
taskList.addEventListener('click', removeFromList)

function addToList(e) {
    const li = document.createElement('li');
    const list = document.querySelector('ul');

    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));

    const link = document.createElement('a');
    link.className = 'secondary-content red-text text-darken-2'
    link.appendChild(document.createTextNode('X'));
    link.setAttribute('href', '#')

    li.appendChild(link);
    list.appendChild(li);

    taskInput.value = '';

    e.preventDefault();
}

function removeFromList(a) {
    const target = event.target.parentElement;
    target.remove();
}