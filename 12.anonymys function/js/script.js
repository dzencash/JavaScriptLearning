console.log('You are at '+window.location);

// анонимная функция

let myFunc = function(element, color){
	element.style.backgroundColor = color;
}
let toUp = function(element){
	element.style.textTransform = 'uppercase';
}

const heading = document.querySelector('h1');
let par = document.querySelector('p');

myFunc(heading, 'green');
myFunc(par, 'white');
toUp(par);