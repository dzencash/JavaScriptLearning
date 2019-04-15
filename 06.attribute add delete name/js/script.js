 
		console.log('You are at '+window.location)


		// выберем элемент который нужен
		const image = document.querySelector('img');

		// проверим содержит ли image нужный нам атрибут и выведем в консоле
		console.log(image.hasAttribute('alt'))

		// удалим атрибут и проверим с помощью вывода в консоль
		image.removeAttribute('alt')
		console.log(image.hasAttribute('alt'));

		// покажем что есть в атрибуте
		console.log(image.getAttribute('src'));

		// установим новый атрибут
		image.setAttribute('src', 'img/Kojima_Productions_logo.png');

		console.log(image.getAttribute('src'));


