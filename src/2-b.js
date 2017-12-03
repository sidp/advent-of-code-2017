const fs = require('fs');
const path = require('path');
const input = fs.readFileSync(path.join(__dirname, '../inputs/2.txt'), 'utf-8');

const splitCols = row => {
	return row.split('\t').map(cell => parseInt(cell, 10));
};

const table = input.split('\n').map(splitCols);

const divideCells = row => {
	let result;
	row.forEach(cellA => {
		row.forEach(cellB => {
			if (cellA !== cellB && cellA % cellB === 0) {
				result = cellA / cellB;
			}
		});
	});
	return result;
};

const sum = (prev, val) => prev + val;

const answer = table.map(divideCells).reduce(sum);

module.exports = answer;
