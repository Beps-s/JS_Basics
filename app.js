const person = {
	firstName: 'Mati',
	lastName: 'Karilaid',
	age: 45,
	email: 'mati.karilaid@tartuvangla.ee',
	hobbies: ['korvpall', 'sport'],
	address: {
		city: 'Tartu',
		country: 'Estonia'
	},
	getBirthYear: function() {
		return 2021 - this.age;
	}
};

let val

val = person;

val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[0];
val = person.address['city'];
val = person.getBirthYear();

const people = [
	(name: 'Kati', age: 35),
	(name: 'Mait', age: 23),
	(name: 'Kait', age: 37)
];

val = people;

for(let i = 0; i < people.length; i++){
	console.log(people[i].name);
}
console.log(val);