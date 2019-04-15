console.log('You are at '+window.location);

const items = document.getElementsByTagName('li');
console.log(items);

//Перебор данных. While(условие) переводится как пока(условие выполняется){происходит это}, конструкции которые позволяю выполнять действия столько сколько нужно
// while(индекс элемента не станет равным длинне массива){
// }

// while(индекс элемента меньше длинны массива){
// }

//создадим переменную counter - счетчик. И будем сравнивать counter с длинной массива (его длинна 3)
let counter = 0;
// while(counter < items.length) {
// }

//Возьмем один из ключей массива items под порядковым номером counter. И далее каждый шаг цикла мы будем увеличивать counter до тех пор пока counter не станет больше или равен длинны массива(то есть пока условие counter < items.length является истинным). Инкрементируем счетчик counter++ 
while(counter < items.length) {
	items[counter].innerHTML = counter + 1;
	counter++; 
}

console.log(items);