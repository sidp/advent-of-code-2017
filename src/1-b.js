const fs = require('fs');
const path = require('path');
const input = fs.readFileSync(path.join(__dirname, '../inputs/1.txt'), 'utf-8');

const numbers = input.split('').map(number => parseInt(number, 10));

let sum = 0;

const numbersLength = numbers.length;
for (let i = 0; i < numbersLength; i += 1) {
	let otherSideIndex = i + Math.floor(numbersLength / 2);
	if (otherSideIndex > numbersLength) {
		otherSideIndex -= numbersLength;
	}

	if (numbers[i] === numbers[otherSideIndex]) {
		sum += numbers[i];
	}
}

module.exports = sum;
