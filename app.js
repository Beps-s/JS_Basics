// for tsykkel
for(let i = 0; i < 10; i++){
	if(i == 5){
		continue;

	}
	console.log(i)
}

// while tsykkel
let i = 0;
while(i < 10){
	console.log(i)
	i++;
}

//do while tsykkel
let j = 0;
do {
	console.log(j)
	j++
} while(j < 10);

// tsyklid ja massiivid
const cars = ['Ford', 'Honda', 'Toyota'];

for(let i = 0; i < cars.length; i++){
	console.log(cars[i])
}

// for each tsykkel
cars.forEach(function(element, index, array){
	console.log(`cars: ${index} = ${element}`)
	console.log(array)
});

cars.forEach((element, index) => {
	console.log(`cars: ${index} = ${element}`)
});


const person = {
	firstName: 'Mati',
	lastName: 'Karilaid',
	age: 37
}

// for in tsykkel
for(let key in person){
	console.log(`${key} = ${person[key]}`)
}