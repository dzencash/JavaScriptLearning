console.log('You are at '+window.location);


const Image = document.querySelector('.imageblock');
let answer = prompt('Сколько тебе лет?');
answer = parseInt(answer);


// Условные выражения

if(answer<18){
	Image.style.backgroundImage = "url(img/school.png)";
}else if(answer<=24){
	Image.style.backgroundImage = "url(img/uni.png)";
}else if(answer<=40){
	Image.style.backgroundImage = "url(img/bar.png)";
}else{
	Image.style.backgroundImage = "url(img/church.jpg)";
}

