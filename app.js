const name = 'Chris';
const age = '17';
const job = 'opilane'
const city = 'Tartu'

let html;

// es5
html = '<ul>' +
			'<li>' + name + '</li>' +
			'<li>' + age + '</li>' +
			'<li>' + job + '</li>' +
			'<li>' + city + '</li>' +
		'</ul>';

// es6
html = `
		<ul>
			<li>${name}</li>
			<li>${age}</li>
			<li>${job}</li>
			<li>${city}</li>
		</ul>
`;

console.log(html);

document.body.innerHTML = html;