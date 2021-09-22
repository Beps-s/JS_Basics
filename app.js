let val;

// nubmer to string
val = String(555);
val = String(4+4);
val = String(5.6);

// boolean to string
val = String(true);
val = String(false);

// objekt to string
val = String(new Date());

// masiiv to string
val = String([1, 3, 5]);

// to String
val = (5).toString();
val = (true).toString();

// string to number
val = Number("5");

// boolean to number
val = Number(true);

// null to number
val = Number(null);

// tekst to number
val = Number('tere');

// masiiv to number
val = Number([1, 2, 3]);

// string to number
val = parseInt('100.30');
val = parseFloat('100.30');

console.log(typeof val);
console.log(val);