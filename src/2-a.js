const fs = require('fs');
const path = require('path');
const input = fs.readFileSync(path.join(__dirname, '../inputs/2.txt'), 'utf-8');

const splitCols = row => {
	return row.split('\t').map(cell => parseInt(cell, 10));
};

const table = input.split('\n').map(splitCols);

const minMaxRows = (prev, cell) => {
	if (!prev.min || prev.min > cell) prev.min = cell;
	if (!prev.max || prev.max < cell) prev.max = cell;
	return prev;
};

const differenceMinMax = ({ min, max }) => max - min;

const sum = (prev, val) => prev + val;

const answer = table
	.map(row => row.reduce(minMaxRows, {}))
	.map(differenceMinMax)
	.reduce(sum);

module.exports = answer;
