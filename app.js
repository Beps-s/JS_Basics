let val;

val = document.querySelector('li');
const evenLi = document.querySelectorAll('li:nth-child(even)');
const oddLi = document.querySelectorAll('li:nth-child(odd)');

evenLi.forEach(function(li){
    li.style.background = '#ddd';
});

oddLi.forEach(function(li){
    li.style.background = '#bbb';
});
