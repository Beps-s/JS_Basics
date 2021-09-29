const li = document.createElement('li');
const list = document.querySelector('ul');
const link = document.createElement('a')

li.className = 'collection-item';
link.className ='secondary-content red-text text-darken-2';

li.appendChild(document.createTextNode('Study element creation'));
link.appendChild(document.createTextNode('X'));

link.setAttribute('href', '#');

list.appendChild(li);
li.appendChild(link);