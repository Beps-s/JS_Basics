let val;

const today = new Date();

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

let birthday = new Date('11/9/2003')
birthday = new Date('November 9 2003');
let age = today - birthday;

birthday.setMonth(12);
birthday.setDate(10);
birthday.setFullYear(2003);
birthday.setHours(11);
birthday.setMinutes(31);
birthday.setSeconds(51);

console.log(birthday);
console.log(today);
console.log(age);