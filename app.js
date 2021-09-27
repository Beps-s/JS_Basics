const id = 100;
//let testid;

// == v6rdub
// != ei v6rdu
// === v6rdub ja toimub tyybikontroll
// !== ei v6rdu ja toimub tyybikontroll

//if(typeof testid > 'undefined'){
//	console.log(`ID on ${id} - suurem kui 100.`);
//} else{
//	console.log(`ID on ${id} - v2iksem v6i v6rdne 100.`);
//}

//console.log(typeof testid);

/*const color = "green";

if(color === 'red'){
	console.log('Stop');
} else if(color === 'yellow'){
	console.log('Attention');
} else if(color === 'green'){
	console.log('Go');
} else {
	console.log('Color is not accepted');
}
*/
const name = 'Kati';
const age = 19;

if(age > 0 && age <= 12){
	console.log(`${name} on tatt`);
} else if( age > 12 && age < 18){
	console.log(`${name} on nooruk`);
} else {
	console.log(`${name} on t2iskasvanu`);
}

if(age < 18 || age > 65){
	console.log(`${name} ei saa registreerida`);
} else {
	console.log(`${name} on registreeritud`);
}

//console.log(id === 100 ? 'Õige' : 'Vale');

if(id === 100) 
	console.log('ID Korras');
else 
	console.log('ID Ei ole korras');