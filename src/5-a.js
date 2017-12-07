const fs = require('fs');
const path = require('path');
const input = fs.readFileSync(path.join(__dirname, '../inputs/5.txt'), 'utf-8');

const list = input.split('\n').map(item => parseInt(item, 10));

let current = 0;
let steps = 0;

while (list[current] !== undefined) {
	let jumpOffset = list[current];
	list[current] += 1;
	current += jumpOffset;
	steps += 1;
}

module.exports = steps;
