let val;

val = document.querySelector('li');
const evenLi = document.querySelectorAll('li:nth-child(even)');

evenLi.forEach(function(li){
    li.style.background = '#ddd';
});


console.log(evenLi);