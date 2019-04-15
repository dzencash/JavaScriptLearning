

const byTag = document.getElementsByTagName('div');
const byClass = document.getElementsByClassName('myClass');
const byId = document.getElementById('myId');

console.log(byTag, byClass, byId);

// Выбирает все элементы с заданым параметром
const bySelector = document.querySelectorAll('.coolClass.mine');
/*Выбирает первый элемент с заданый параметром*/
const firstbySelector = document.querySelector('.coolClass.mine');

console.log(bySelector, firstbySelector);

/*Добавляем новый элемент в конкретный див на странице
выбираемый по ID (точнее: работыет только еслм мы выбираем КОНКРЕТНЫЙ элемент)
byId.innerHTML = "<h2>You can't always get what you want to</h2>"

*/



const question = prompt('What is you desire to show on the web page?');
byId.innerHTML = question;