/*const color = 'red';

switch(color){
	case 'red':
		console.log('Stop');
		break;
	case 'yellow':
		console.log('Attention');
		break;
	case 'green':
		console.log('Go');
		break;
	default:
		console.log('Color not accepted');
		break;
}
*/

let today = new Date('10/03/2021');
let dayNumber = day.getDay();
console.log(dayNumber);

switch(dayNumber){
	case '0':
		console.log('Pyhap2ev');
		break;
	case '1':
		console.log('Esmasp2ev');
		break;
	case '2':
		console.log('Teisip2ev');
		break;
	case '3':
		console.log('Kolmap2ev');
		break;
	case '4':
		console.log('Neljap2ev');
		break;
	case '5':
		console.log('Reede');
		break;
	case '6':
		console.log('Laup2ev');
		break;
}