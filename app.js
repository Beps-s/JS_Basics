const num1 = [55, 26, 52, 74, 35, 16, 98];
const num2 = new Array(54, 25, 53, 71, 37, 18, 96);
const mixed = [22, 'Tere', true, null, undefined, new Date()];

let val;

val = num1.length;
val = Array.isArray(num1)
val = num1[1];
num1[1] = 100
val = num1.indexOf(35);
num1.push(250);
num1.unshift(150);
num1.pop();
num1.shift(),
//num1.splice(1, 3);
//num1.reverse();
val = num1.concat(num2);
val =num1.sort();
val = num1.sort(function(x, y){
	return x - y;
});

console.log(val);
//console.log(num1);