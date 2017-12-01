const fs = require('fs');
const input = fs.readFileSync('./1-input.txt', 'utf-8');

const numbers = input.split('').map(number => parseInt(number, 10));

const initialState = {
	prevNumber: numbers[numbers.length - 1],
	sum: 0,
};

function sumPreviousNumber(state, number) {
	if (state.prevNumber === number) {
		state.sum += number;
	}
	state.prevNumber = number;
	return state;
}

const sum = numbers.reduce(sumPreviousNumber, initialState).sum;

console.log('Sum:', sum);
