console.log('You are at '+window.location);


const Image = document.querySelector('.imageblock');
let answer = prompt('Сколько тебе лет?');
answer = parseInt(answer);


// Тернарные условия
// (условие) ? если да то это : если нет то это

(answer >= 18) ? Image.style.backgroundImage = 'url(img/uni.png)' : Image.style.backgroundImage = 'url(img/school.png)';

