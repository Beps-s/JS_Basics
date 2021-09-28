// Funktsioon
function greeting(firstName = 'Kadi', lastName = 'Tamm'){

	/*if(typeof firstName === 'undefined'){
		firstName = 'Kadi';
	}
	if(typeof lastName === 'undefined'){
		lastName = 'Tamm';
	}*/
	return 'Tere, ' + firstName + ' ' + lastName
}
console.log(greeting('Chris', 'Erman'));

// Funktsioon avaldise kujul
const square = function(number = 3) {
	return number * number;
}
console.log(square())

//
(function(name){
	console.log('Tere ' + name);
})();

const todo = {
	add: function(){
		console.log('add todo ...');
	},
	edit: function(id){
		console.log(`edit todo nr ${id} ...`);
	},
	delete: function(){
		console.log('delete todo ...');
	}
}

todo.add();
todo.edit(5);
todo.delete();