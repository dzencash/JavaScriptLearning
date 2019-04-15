console.log('You are at '+window.location);

//Массив, состоящий из 3-х ключей и 3 значений
let people = ['Eric', 'Leo', 'Johny'];

console.log(people);
//Чтобы вызвать значение по индексу конкретного массива
console.log(people[1]);
//Можно переопределять значения в массиве
people[1] = 'DiCaprio';
console.log(people[1]);
//Определить длинну .length
console.log(people.length)

//

let bigArray = [
	[1, 2, 3],
	[true, false],
	['a', 'b', 'c']


]
console.log(bigArray);
console.log(bigArray.length);
//Выберет первый (0) массив большого массива bigArray
console.log(bigArray[0]);
//Выберет второе значение (1) второго массива [1, 2, 3] в большом массиве bigArray
//Многомерные массивы 
console.log(bigArray[1][1]);

//Внутри обьекта bigObject разные типы данных: массив с ключем (names) и массивом ['Eric', 'Leo', 'Johny'] и массив grades([]), состоящий из обьектов({})

let bigObject = {
	names: ['Eric', 'Leo', 'Johny'],
	grades: [
	{
		intern: 1,
		junior: 2,
	},
	{
		middle: 3,
		senior: 4
	}
	]
}
//обратимся к массиву names
console.log(bigObject.names);
//обратимся к массиву names и конкретно первому значению этого массива
console.log(bigObject.names[0]);
//обратимся к массиву grades, его первому массиву по индексу и его обьекту senior, где 
// {
// 		intern: 1,
// 		junior: 2,
// 	},
// это массив [0]

console.log(bigObject.grades[1].senior);