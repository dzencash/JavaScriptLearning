console.log('You are at '+window.location);

// Part one
// Создадим массив
let myArr = [1, 2, 3];
console.log('We create an arrow consist of: '+ myArr);
// Добавить в конец
myArr.push(4, 5, 6);
console.log('We .push(4, 5, 6) it and as we see the elements we pushed was added to the end: ' + myArr);
// Удалить с конца, один крайний ключ
myArr.pop();
console.log('Now we .pop() the one of the key from the end: ' + myArr);
// Добавить в начало
myArr.shift(-1, 0);
console.log('After we .shift(-1, 0) a pair of key to the start of array: ' + myArr);
// Удалить с начала
myArr.unshift()
console.log('We .unshift() one of them from the begining of array: ' + myArr);

// Part two
// delete - заменит элемент на empty (undefined)
delete myArr[2];
console.log(myArr);

// для того чтобы вырезать элементы и осуществить сдвиг существует универсальный метод splice
//1 - элемент с которого начать (с элемента под индексом 1), 2 - элементы сколько удалить (два)
myArr.splice(1,2);
console.log(myArr); 
//1 - элемент с которого начать (с элемента под индексом 1), 2 - элементы сколько удалить (два), и подставь туда 'вот это' и 'вот это'
myArr.splice(1,1,'place for 5', 'place for another one');
console.log(myArr);

// Part three
//ВНИМАНИЕ! splice и slice - разные понятия! 
//.slice(1,2) - вырезает начиная с элемента под индексом 1(второй элемент по счету т.к счет начинается с нуля), по 2 элемент (третий по счету). Далее можно сохранять результат в переменную

let a = [1,2,3,4];
console.log(a);

let b = a.slice(1,3);
console.log('Array a: ' + a);
console.log('What we slice from Array a and put in b: ' + b);

//Метод .reverse - разворачивает ключи массива в обратном порядке
b.reverse();
console.log(b);

//Метод concat - добавляет один массив к другому (ключи одного массива .push'атся в другой). Конкатинация - соединение

let c = a.concat(b);
console.log('This is the result of a.concat(b): ' + c);


//метод .indexOf('имя в массиве') - покажет под каким индексом находится 'имя в массиве'
let fruits = ['orange', 'apple', 'peach'];
console.log(fruits);
console.log(fruits.indexOf('apple'));
//Если в массиве отсутствует данная строка, то вернет -1
console.log(fruits.indexOf('melon'));


//с помощью аргумента .sort() - можно отсортировать массив. Это работает только со строками, но не с Numbers. 
console.log(fruits.sort());

//в JS при сравнении строк сначала сравнивается первые символы в строке, если они равны, то вторые символы и т.д. Для корректного сравнения Numbers нужна функция 
let numb = [301, 60, 31];
console.log('Сортировка не верная: ');
console.log(numb.sort())
//не верная сортировка 
// с помощью функции
//function compare(a,b){
// 	if (a>b){
// 		return 1;
// 	}if (b>a){
// 		return -1;
// 	}
// }
//то же самое только в одну строку
function compare(a,b){
	if (a>b) return 1;
	if (a<b) return -1;
}
console.log('Сортировка не верная с функцией в качестве аргумента: ');
console.log(numb.sort(compare));