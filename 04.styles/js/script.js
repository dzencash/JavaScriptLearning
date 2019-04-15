
	
		console.log('You are at '+window.location)



		const Colored = document.querySelector('.colored');
		console.log(Colored);

		console.log(Colored.style);

		// Colored.style.backgroundColor = "blue";
		// альтернативный способ задания стилей, без кейстата ниже
		// вот он: Colored.style['background-color'] = "green";

		let questaboutcolor = prompt('Какого цвета квадрат ты хочешь?(только английские цвета)')
		Colored.style['background-color'] = questaboutcolor;
