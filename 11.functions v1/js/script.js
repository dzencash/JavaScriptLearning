console.log('You are at '+window.location)

function sayHi(){
	// функция(если ее вызвать)возвращает в консоль фразу
	return 'Привет, студент!'
	// console.log('Привет, стдуент!');
}

console.log(sayHi());
alert(sayHi());
document.body.innerHTML =sayHi();

let name = prompt('Как ваше имя?');

function sayName(name){
	return 'Привет, ' + name;
}


// console.log(sayName('Таня'));
// console.log(sayName('Дима'));
console.log(sayName(name)+'!');

