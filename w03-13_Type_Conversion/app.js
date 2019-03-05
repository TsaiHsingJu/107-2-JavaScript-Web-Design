let val;

// Number to string {number & sum}
val = String(666);
console.log('String(555) =',val);

val = String(6+6);
console.log('String(6+6) =',val);

// Bool to string
val = String(true);
console.log('String(true) =',val);

// Date to string
val = String(new Date());
console.log('String(new Date) =',val);

// Array to string
val = String([1,2,3,4]);
console.log('String([1,2,3,4]) =',val);

// toString() {number & bool}
val = String(6).toString();
console.log('(6).toString =',val);

val = (true).toString();
console.log('(6).toString =',val);

// String to number {char & bool & null & string & array}
val = Number('6');
console.log("Number('6') = ",val)

val = Number(true);
console.log("Number(true)",val);

val = Number(false);
console.log("Number(false)",val)

val = Number(null);
console.log("Number(null)",val)

val = Number('hello');
console.log("Number('hello)",val)

val = Number([1,2,3,4]);
console.log("Number([1,2,3,4])",val)

// parseInt & parseFloat
val =parseInt('100.30');
console.log("ParseInt = ",val)

val = parseFloat('100.30');
console.log("ParseFloat =",val)

// Output {consol val & typeof val & val.length & val.to Fixed(2)}
console.log(val);

console.log(typeof val);

val='hello';
console.log("length = ",val.length);

val = 100.123;
console.log("toFixed(2) =",val.toFixed(2));

const val1 = String(5);
console.log("val1 = String(5)");

const val2 = 6;
console.log("val2 = 6");

const sum = Number(val1 + val2);

//consol.log {sum & typeof sum}
console.log("Number(val1+val2) = ",sum);
console.log(typeof sum);