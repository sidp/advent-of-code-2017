const fs = require('fs');
const path = require('path');
const input = fs.readFileSync(path.join(__dirname, '../inputs/1.txt'), 'utf-8');

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

module.exports = sum;
