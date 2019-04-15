console.log('You are at '+window.location);


let answer = prompt('Введите имя музыканта');
		// приведем значение answer к нижнему регистру
answer = answer.toLowerCase();


switch(answer) {
	case 'dr. dre':
		console.log('rap');
		break;
	case 'jimmy hendrix':
		console.log('rock');
		break;
	case 'britney spears':
		console.log('pop');
		break;
	default:
		console.log('No such singer in database');
		break;
}
