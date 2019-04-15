console.log('You are at '+window.location);

const divs = document.querySelectorAll('div');
console.log(divs);
//При использовании цикла for в качестве счетчика (counter) выступит например i. Прировняем i=0; Сравним i с длинной массива; инкрементируем i - сделаем все в одну строку.

for(let i = 0; i<divs.length; i++) {
	divs[i].style.backgroundImage = 'linear-gradient('+(45+i*20)+'deg, red 20%, blue 50%)';
}