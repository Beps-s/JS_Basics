const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const heading = document.querySelector('h4');

taskInput.value = '';

// form.addEventListener('submit', runEvent);

// taskInput.addEventListener('keydown', runEvent);
// taskInput.addEventListener('keyup', runEvent);
// taskInput.addEventListener('keypress', runEvent);
// taskInput.addEventListener('focus', runEvent);
// taskInput.addEventListener('blur', runEvent);
// taskInput.addEventListener('paste', runEvent);
// taskInput.addEventListener('input', runEvent);


function runEvent(e) {
    console.log(`Event type: ${e.type}`);
    heading.innerText = e.target.value;
    // e.preventDefault();
}