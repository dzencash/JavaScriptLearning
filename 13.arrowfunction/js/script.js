console.log('You are at '+window.location);


// Разместим текст на странице с помощью анонимной функции
// let myText = function(element, text){
// 	element.innerHTML = text;
// }

// myText(document.body, 'Этот текст размещен с помощью анонимной функции JS');


let mySecondText = (element, text) => {
	element.innerHTML = text;
}

// Следующая запись тоже корректна
// let mySecondText = (element, text) => element.innerHTML = text;

let question = prompt('Какой текст ты хочешь разместить на странице с помощью линейной функции?');

mySecondText(document.body, question);
