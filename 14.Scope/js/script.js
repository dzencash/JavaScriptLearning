console.log('You are at '+window.location);


var a = 'hi';

function myFunc(){
	a = 'hello';
	return a;
}

console.log(a);

function myFunc2(){
	//  переменная var и let не видны из функций
	var b = 'Goodbye'
	console.log(b);
}

myFunc2();


// -----------------------------

if(true){
	//  переменная var видна из условных блоков
	var c = 'Always true!';
	//  переменная let НЕ видна из условных блоков
	let d = 'Failure!';
}
console.log(c);
console.log(d);